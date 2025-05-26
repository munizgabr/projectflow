// Funções globais
function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    sidebar.classList.toggle('collapsed');
    sidebar.classList.toggle('sidebar-expanded');
}

function closeModal(modalId) {
    document.getElementById(modalId).classList.add('hidden');
}

function openModal(modalId) {
    document.getElementById(modalId).classList.remove('hidden');
}

// Inicialização dos gráficos
document.addEventListener('DOMContentLoaded', function() {
    // Verifica se estamos na página de dashboard
    if (document.getElementById('projectsChart')) {
        const projectsCtx = document.getElementById('projectsChart').getContext('2d');
        const projectsChart = new Chart(projectsCtx, {
            type: 'doughnut',
            data: {
                labels: ['Concluídos', 'Em andamento', 'Pendentes'],
                datasets: [{
                    data: [8, 3, 1],
                    backgroundColor: [
                        '#10B981',
                        '#3B82F6',
                        '#F59E0B'
                    ],
                    borderWidth: 0
                }]
            },
            options: {
                cutout: '70%',
                plugins: {
                    legend: {
                        display: false
                    }
                }
            }
        });

        const tasksCtx = document.getElementById('tasksChart').getContext('2d');
        const tasksChart = new Chart(tasksCtx, {
            type: 'doughnut',
            data: {
                labels: ['Concluídas', 'Pendentes'],
                datasets: [{
                    data: [42, 24],
                    backgroundColor: [
                        '#10B981',
                        '#F59E0B'
                    ],
                    borderWidth: 0
                }]
            },
            options: {
                cutout: '70%',
                plugins: {
                    legend: {
                        display: false
                    }
                }
            }
        });

        const progressCtx = document.getElementById('progressChart').getContext('2d');
        const progressChart = new Chart(progressCtx, {
            type: 'bar',
            data: {
                labels: ['Projeto A', 'Projeto B', 'Projeto C', 'Projeto D'],
                datasets: [{
                    label: 'Progresso',
                    data: [75, 90, 60, 40],
                    backgroundColor: '#3B82F6',
                    borderRadius: 4
                }]
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true,
                        max: 100,
                        ticks: {
                            callback: function(value) {
                                return value + '%';
                            }
                        }
                    }
                },
                plugins: {
                    legend: {
                        display: false
                    }
                }
            }
        });
    }
});

// Event listeners globais
document.addEventListener('click', function(e) {
    if (e.target.classList.contains('modal-overlay')) {
        e.target.closest('.modal').classList.add('hidden');
    }
});
