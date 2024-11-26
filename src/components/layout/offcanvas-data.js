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
        path: '/services',
        cName: 'offcanvas-text',
        arrowDown: 'FaAngleDown',
        submenu: [
            {
                id: 'submenu-01',
                link: '/services/web-application',
                text: 'Web Application Development',
            },
            {
                id: 'submenu-02',
                link: '/services/mobile-application',
                text: 'Mobile Application Development',
            },
            {
                id: 'submenu-03',
                link: '/services/itconsulting',
                text: 'IT Consulting',
            },
            {
                id: 'submenu-04',
                link: '/services/digital-marketing',
                text: 'Digital Marketing',
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
        title: 'Contact Us',
        path: '/contact',
        cName: 'offcanvas-text',
    },
];
