const express = require('express');
const ProjectsController = require('../controllers/ProjectsController');
const router = express.Router();

// GET /projects - Lista todos os projetos
router.get('/', ProjectsController.index);

// GET /projects/new - Formulário para criar novo projeto
router.get('/new', ProjectsController.new);

// POST /projects - Cria um novo projeto
router.post('/', ProjectsController.create);

// GET /projects/:id - Mostra um projeto específico
router.get('/:id', ProjectsController.show);

// GET /projects/:id/edit - Formulário de edição
router.get('/:id/edit', ProjectsController.edit);

// PUT /projects/:id - Atualiza um projeto
router.put('/:id', ProjectsController.update);

// DELETE /projects/:id - Remove um projeto
router.delete('/:id', ProjectsController.delete);

module.exports = router;
