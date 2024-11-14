export const OffcanvasData = [
    {
        id: 1,
        title: 'Home',
        path: '/',
        cName: 'offcanvas-text',
    },
    {
        id: 2,
        title: 'About Us',
        path: '/about',
        cName: 'offcanvas-text',
    },
    {
        id: 3,
        title: 'Services',
        path: '#',
        cName: 'offcanvas-text',
        arrowDown: 'FaAngleDown',
        submenu: [
            {
                id: 'submenu-01',
                link: '#',
                text: 'IT Consulting',
            },
            {
                id: 'submenu-02',
                link: '#',
                text: 'Cloud Solutions',
            },
            {
                id: 'submenu-03',
                link: '#',
                text: 'Software Development',
            },
            {
                id: 'submenu-04',
                link: '#',
                text: 'Technical Support & Maintenance',
            },
        ],
    },
    {
        id: 4,
        title: 'Our Working Process',
        path: '/our-working-process',
        cName: 'offcanvas-text',
    },
    {
        id: 5,
        title: 'Contact',
        path: '/contact',
        cName: 'offcanvas-text',
    },
];
