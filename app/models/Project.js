const mongoose = require('mongoose');
const helpers = require('../utils/helpers');

const projectSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'O nome do projeto é obrigatório'],
    trim: true,
    maxlength: [100, 'O nome não pode ter mais que 100 caracteres']
  },
  description: {
    type: String,
    trim: true,
    maxlength: [500, 'A descrição não pode ter mais que 500 caracteres']
  },
  startDate: {
    type: Date,
    default: Date.now
  },
  endDate: {
    type: Date
  },
  progress: {
    type: Number,
    default: 0,
    min: [0, 'O progresso não pode ser menor que 0'],
    max: [100, 'O progresso não pode ser maior que 100']
  },
  status: {
    type: String,
    enum: ['pending', 'in_progress', 'completed', 'cancelled'],
    default: 'pending'
  },
  team: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Team'
  },
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  }
}, {
  timestamps: true,
  toJSON: { virtuals: true },
  toObject: { virtuals: true }
});

// Virtual para calcular dias restantes
projectSchema.virtual('daysRemaining').get(function() {
  if (!this.endDate) return null;
  const diff = this.endDate - Date.now();
  return Math.ceil(diff / (1000 * 60 * 60 * 24));
});

// Formata dados antes de retornar
projectSchema.methods.toJSON = function() {
  const project = this.toObject();
  project.startDate = helpers.formatDate(project.startDate);
  project.endDate = helpers.formatDate(project.endDate);
  return project;
};

module.exports = mongoose.model('Project', projectSchema);
