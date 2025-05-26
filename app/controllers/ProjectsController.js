class ProjectsController {
  async index(req, res) {
    // Lista todos os projetos (simulação)
    const projects = [
      { id: 1, name: 'Atualização do Sistema', progress: 75 },
      { id: 2, name: 'Novo Portal', progress: 40 },
      { id: 3, name: 'Migração de Dados', progress: 90 }
    ];
    
    res.render('projects/index', {
      title: 'ProjectFlow - Projetos',
      sectionTitle: 'Projetos',
      activePage: 'projects',
      projects
    });
  }

  async new(req, res) {
    res.render('projects/new', {
      title: 'ProjectFlow - Novo Projeto',
      sectionTitle: 'Novo Projeto',
      activePage: 'projects'
    });
  }

  async create(req, res) {
    // Lógica para criar projeto (simulação)
    res.redirect('/projects');
  }

  async show(req, res) {
    // Detalhes de um projeto (simulação)
    const project = {
      id: req.params.id,
      name: 'Projeto Exemplo',
      description: 'Descrição detalhada do projeto',
      startDate: '2023-01-01',
      endDate: '2023-06-30',
      progress: 65
    };
    
    res.render('projects/show', {
      title: `ProjectFlow - ${project.name}`,
      sectionTitle: project.name,
      activePage: 'projects',
      project
    });
  }

  async edit(req, res) {
    // Formulário de edição (simulação)
    const project = {
      id: req.params.id,
      name: 'Projeto Exemplo',
      description: 'Descrição atual do projeto'
    };
    
    res.render('projects/edit', {
      title: `ProjectFlow - Editar ${project.name}`,
      sectionTitle: `Editar ${project.name}`,
      activePage: 'projects',
      project
    });
  }

  async update(req, res) {
    // Lógica para atualizar projeto (simulação)
    res.redirect(`/projects/${req.params.id}`);
  }

  async delete(req, res) {
    // Lógica para remover projeto (simulação)
    res.redirect('/projects');
  }
}

module.exports = ProjectsController;
