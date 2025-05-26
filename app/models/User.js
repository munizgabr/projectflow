const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const helpers = require('../utils/helpers');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'O nome é obrigatório'],
    trim: true,
    maxlength: [100, 'O nome não pode ter mais que 100 caracteres']
  },
  email: {
    type: String,
    required: [true, 'O email é obrigatório'],
    unique: true,
    lowercase: true,
    validate: {
      validator: helpers.isValidEmail,
      message: 'Por favor, forneça um email válido'
    }
  },
  password: {
    type: String,
    required: [true, 'A senha é obrigatória'],
    minlength: [8, 'A senha deve ter no mínimo 8 caracteres'],
    select: false
  },
  role: {
    type: String,
    enum: ['user', 'admin'],
    default: 'user'
  },
  avatar: {
    type: String,
    default: function() {
      return `https://ui-avatars.com/api/?name=${encodeURIComponent(this.name)}&background=random`;
    }
  },
  active: {
    type: Boolean,
    default: true,
    select: false
  },
  lastLogin: {
    type: Date
  }
}, {
  timestamps: true,
  toJSON: { virtuals: true },
  toObject: { virtuals: true }
});

// Middleware para hash da senha antes de salvar
userSchema.pre('save', async function(next) {
  if (!this.isModified('password')) return next();
  this.password = await bcrypt.hash(this.password, 12);
  next();
});

// Virtual para projetos do usuário
userSchema.virtual('projects', {
  ref: 'Project',
  localField: '_id',
  foreignField: 'createdBy'
});

// Virtual para equipes do usuário
userSchema.virtual('teams', {
  ref: 'Team',
  localField: '_id',
  foreignField: 'members.user'
});

// Método para verificar senha
userSchema.methods.correctPassword = async function(candidatePassword, userPassword) {
  return await bcrypt.compare(candidatePassword, userPassword);
};

// Formata dados antes de retornar
userSchema.methods.toJSON = function() {
  const user = this.toObject();
  delete user.password;
  user.createdAt = helpers.formatDate(user.createdAt);
  user.updatedAt = helpers.formatDate(user.updatedAt);
  return user;
};

module.exports = mongoose.model('User', userSchema);
