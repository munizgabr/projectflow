class TeamsController {
  async index(req, res) {
    // Lista todas as equipes (simulação)
    const teams = [
      { id: 1, name: 'Desenvolvimento', members: 5 },
      { id: 2, name: 'Design', members: 3 },
      { id: 3, name: 'Marketing', members: 4 }
    ];
    
    res.render('teams/index', {
      title: 'ProjectFlow - Equipes',
      sectionTitle: 'Equipes',
      activePage: 'teams',
      teams
    });
  }

  async new(req, res) {
    res.render('teams/new', {
      title: 'ProjectFlow - Nova Equipe',
      sectionTitle: 'Nova Equipe',
      activePage: 'teams'
    });
  }

  async create(req, res) {
    // Lógica para criar equipe (simulação)
    res.redirect('/teams');
  }

  async show(req, res) {
    // Detalhes de uma equipe (simulação)
    const team = {
      id: req.params.id,
      name: 'Equipe Exemplo',
      description: 'Descrição detalhada da equipe',
      members: [
        { id: 1, name: 'João Silva', role: 'Desenvolvedor' },
        { id: 2, name: 'Maria Lima', role: 'Designer' }
      ]
    };
    
    res.render('teams/show', {
      title: `ProjectFlow - ${team.name}`,
      sectionTitle: team.name,
      activePage: 'teams',
      team
    });
  }

  async edit(req, res) {
    // Formulário de edição (simulação)
    const team = {
      id: req.params.id,
      name: 'Equipe Exemplo',
      description: 'Descrição atual da equipe'
    };
    
    res.render('teams/edit', {
      title: `ProjectFlow - Editar ${team.name}`,
      sectionTitle: `Editar ${team.name}`,
      activePage: 'teams',
      team
    });
  }

  async update(req, res) {
    // Lógica para atualizar equipe (simulação)
    res.redirect(`/teams/${req.params.id}`);
  }

  async delete(req, res) {
    // Lógica para remover equipe (simulação)
    res.redirect('/teams');
  }
}

module.exports = TeamsController;
