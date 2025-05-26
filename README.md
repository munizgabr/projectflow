# ProjectFlow - Sistema de Gerenciamento de Projetos

## Configuração do Ambiente

### Pré-requisitos
- Node.js (v16 ou superior)
- MongoDB (local ou Atlas)
- npm ou yarn

### Passo 1: Instalação
```bash
git clone [URL_DO_REPOSITORIO]
cd projectflow
npm install
```

### Passo 2: Configuração do .env
1. Crie um arquivo `.env` na raiz do projeto
2. Copie as configurações do `.env.example`:
```bash
cp .env.example .env
```
3. Edite o `.env` com suas configurações:

```env
# Configurações básicas
NODE_ENV=development
PORT=3000

# Banco de dados - use sua conexão do MongoDB
MONGODB_URI=mongodb://localhost:27017/projectflow

# Autenticação JWT - gere um segredo forte
JWT_SECRET=seu_segredo_super_secreto_aqui
JWT_EXPIRES_IN=30d

# Configurações de email (opcional para funcionalidades futuras)
#EMAIL_HOST=smtp.seuprovedor.com
#EMAIL_PORT=587
#EMAIL_USER=seuemail@provedor.com
#EMAIL_PASS=suasenha

# URL do frontend
FRONTEND_URL=http://localhost:3000
```

### Passo 3: Iniciar a aplicação
```bash
npm start
```

A aplicação estará disponível em: http://localhost:3000

## Estrutura do Projeto
```
projectflow/
├── app/
│   ├── config/       # Configurações
│   ├── controllers/  # Lógica dos controllers
│   ├── models/       # Modelos do MongoDB
│   ├── routes/       # Definição de rotas
│   ├── utils/        # Utilitários
│   └── views/        # Templates EJS
├── public/           # Arquivos estáticos
└── .env.example      # Modelo de configuração
```

## Primeiros Passos
1. Acesse http://localhost:3000
2. Cadastre um usuário admin (implementação futura)
3. Explore as funcionalidades de projetos e equipes

## Dúvidas?
Consulte a documentação completa ou abra uma issue no repositório.
