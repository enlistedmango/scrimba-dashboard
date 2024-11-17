const BASE_PATH = '/scrimba-dashboard';

export const projectsData = {
    counterApp: {
        title: 'Counter App',
        description: 'This app allows you to increment and save a counter',
        liveDemoLink: `${BASE_PATH}/projects/counter-app/index.html`,
        technologies: ['HTML', 'CSS', 'JavaScript']
    },
    scoreboard: {
        title: 'Basketball Scoreboard',
        description: 'Digital scoreboard with timer and period tracking',
        liveDemoLink: `${BASE_PATH}/projects/solo-scoreboard/index.html`,
        technologies: ['HTML', 'CSS', 'JavaScript'],
        features: [
            'Score tracking',
            'Game timer',
            'Period tracking',
            'Timeout management'
        ]
    }
};
