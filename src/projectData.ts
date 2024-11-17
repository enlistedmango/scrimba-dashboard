const BASE_PATH = '/scrimba-dashboard';

export const projectsData = {
    businessCard: {
        title: '1. Business Card',
        description: 'This is a business card with some animations',
        liveDemoLink: `${BASE_PATH}/projects/business-card/index.html`,
        technologies: ['HTML', 'CSS']
    },
    counterApp: {
        title: '2. Counter App',
        description: 'This app allows you to increment and save a counter',
        liveDemoLink: `${BASE_PATH}/projects/counter-app/index.html`,
        technologies: ['HTML', 'CSS', 'JavaScript']
    },
    scoreboard: {
        title: '3. Basketball Scoreboard (solo project)',
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
