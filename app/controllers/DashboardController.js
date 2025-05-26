class DashboardController {
  async index(req, res) {
    res.render('dashboard', {
      title: 'ProjectFlow - Dashboard',
      sectionTitle: 'Dashboard',
      activePage: 'dashboard',
      projectsCount: 12,
      completedProjects: 8,
      pendingTasks: 24,
      completedTasks: 42,
      teamMembers: 8,
      teamAvatars: [
        'https://ui-avatars.com/api/?name=João+S',
        'https://ui-avatars.com/api/?name=Maria+L',
        'https://ui-avatars.com/api/?name=Carlos+M',
        'https://ui-avatars.com/api/?name=Ana+R',
        'https://ui-avatars.com/api/?name=Pedro+C'
      ],
      activities: [
        {
          user: 'João Silva',
          avatar: 'https://ui-avatars.com/api/?name=João+S',
          action: 'Criou um novo projeto "Atualização do Sistema"',
          time: '10 minutos atrás'
        },
        {
          user: 'Maria Lima',
          avatar: 'https://ui-avatars.com/api/?name=Maria+L',
          action: 'Completou a tarefa "Configurar API"',
          time: '1 hora atrás'
        },
        {
          user: 'Carlos Moura',
          avatar: 'https://ui-avatars.com/api/?name=Carlos+M',
          action: 'Adicionou novo membro à equipe',
          time: '2 horas atrás'
        }
      ]
    });
  }
}

module.exports = DashboardController;