require('dotenv').config();
const express = require('express');
const path = require('path');
const connectDB = require('./config/database');
const routes = require('./routes');
const config = require('./config/config');

const app = express();

// Conecta ao banco de dados
connectDB();

// Configurações
app.set('view engine', 'ejs');
app.set('views', [
  path.join(__dirname, 'views'),
  path.join(__dirname, 'views/projects'),
  path.join(__dirname, 'views/teams')
]);

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.use('/assets', express.static(path.join(__dirname, 'assets')));

// Rotas
app.use(routes);

// Error handling
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).render('error', { 
    title: 'Erro',
    message: 'Ocorreu um erro no servidor' 
  });
});

// Inicia o servidor
const PORT = config.PORT || 3000;
app.listen(PORT, () => {
  console.log(`\n=== Servidor rodando em modo ${config.NODE_ENV} ===`);
  console.log(`Servidor rodando na porta ${PORT}`);
  console.log(`Acesse: http://localhost:${PORT}\n`);
});
