const express = require('express');
const TeamsController = require('../controllers/TeamsController');
const router = express.Router();

// GET /teams - Lista todas as equipes
router.get('/', TeamsController.index);

// GET /teams/new - Formulário para criar nova equipe
router.get('/new', TeamsController.new);

// POST /teams - Cria uma nova equipe
router.post('/', TeamsController.create);

// GET /teams/:id - Mostra uma equipe específica
router.get('/:id', TeamsController.show);

// GET /teams/:id/edit - Formulário de edição
router.get('/:id/edit', TeamsController.edit);

// PUT /teams/:id - Atualiza uma equipe
router.put('/:id', TeamsController.update);

// DELETE /teams/:id - Remove uma equipe
router.delete('/:id', TeamsController.delete);

module.exports = router;
