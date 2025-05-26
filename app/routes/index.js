const express = require('express');
const dashboardRoutes = require('./dashboard');
const projectsRoutes = require('./projects');
const teamsRoutes = require('./teams');

const router = express.Router();

// Rotas principais
router.use('/dashboard', dashboardRoutes);
router.use('/projects', projectsRoutes);
router.use('/teams', teamsRoutes);

// Rota raiz redireciona para o dashboard
router.get('/', (req, res) => {
  res.redirect('/dashboard');
});

module.exports = router;
