const mongoose = require('mongoose');
const helpers = require('../utils/helpers');

const teamSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'O nome da equipe é obrigatório'],
    trim: true,
    maxlength: [100, 'O nome não pode ter mais que 100 caracteres']
  },
  description: {
    type: String,
    trim: true,
    maxlength: [500, 'A descrição não pode ter mais que 500 caracteres']
  },
  members: [{
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true
    },
    role: {
      type: String,
      enum: ['manager', 'developer', 'designer', 'tester', 'other'],
      default: 'developer'
    },
    joinedAt: {
      type: Date,
      default: Date.now
    }
  }],
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  projects: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Project'
  }]
}, {
  timestamps: true,
  toJSON: { virtuals: true },
  toObject: { virtuals: true }
});

// Virtual para contar membros
teamSchema.virtual('memberCount').get(function() {
  return this.members.length;
});

// Virtual para contar projetos
teamSchema.virtual('projectCount').get(function() {
  return this.projects.length;
});

// Formata dados antes de retornar
teamSchema.methods.toJSON = function() {
  const team = this.toObject();
  team.createdAt = helpers.formatDate(team.createdAt);
  team.updatedAt = helpers.formatDate(team.updatedAt);
  return team;
};

module.exports = mongoose.model('Team', teamSchema);
