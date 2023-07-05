// import Typed from './node_modules/typed.js/lib/typed';

// var Typed = require('./typed.min.js');
// var typed = new Typed('#header-search-input', {
//     strings: [
//         '',
//         "I'm a Front-End Developer",
//         "I'm a Designer",
//         "I'm a Android Developer",
//     ],
//     attr: 'placeholder',
//     startDelay: 50,
//     typeSpeed: 50,
//     backSpeed: 50,
//     smartBackspace: true,
//     loop: true,
//     loopCount: Infinity,
// });
const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const recentWorkContainer = document.querySelector('.recentWork__container');
// recent btn
const everything_btn = document.querySelector('.recentWork__title--everything');
const web_btn = document.querySelector('.recentWork__title--web');
const app_btn = document.querySelector('.recentWork__title--app');
const landingPage_btn = document.querySelector(
    '.recentWork__title--landing-page'
);
const design_btn = document.querySelector('.recentWork__title--design');

// skill
const skillContainer = document.querySelector('.technologies__container');

const app = {
    projects: [
        {
            name: 'Rent motorbike',
            src: './img/image_project/rent_moto.PNG',
            type: 'Website',
            link: 'https://rent-moto-ui.vercel.app/',
        },
        {
            name: 'Tiktok clone',
            src: './img/image_project/tiktok.JPG',
            type: 'Website',
            link: 'https://tiktok-ui-liart.vercel.app/',
        },
        {
            name: 'Chat app',
            src: './img/image_project/chatapp.JPG',
            type: 'Website',
            link: 'https://chat-app-xi-nine.vercel.app/',
        },
        {
            name: 'Music player',
            src: './img/image_project/music.png',
            type: 'Website',
            link: 'https://music-player-inky-nu.vercel.app/',
        },
        {
            name: 'Portfolio',
            src: './img/image_project/port.png',
            type: 'Landing page',
            link: 'https://portfolio-eosin-five-34.vercel.app/',
        },
        {
            name: 'Blog Da Lat',
            src: './img/image_project/blog.png',
            type: 'Landing page',
            link: 'https://f8-blog.vercel.app/',
        },
        {
            name: 'Quan Li Ban Hang',
            src: './img/image_project/quanlinhahang.png',
            type: 'App',
            link: 'https://github.com/ZuKerNo1/Quan-Li-Nha-Hang',
        },
        {
            name: 'Tour UI/UX design',
            src: './img/image_project/tour.png',
            type: 'Design',
            link: 'https://www.figma.com/proto/YTtuTFksEh3101KhcKxDb9/BVT_67_CuoiKy?node-id=3-2&scaling=min-zoom&page-id=0%3A1&starting-point-node-id=3%3A2&mode=design&t=xeQCUYGH8a9XMVrO-1',
        },
    ],

    skills: [
        {
            name: 'html',
            src: '/img/image_language/html.png',
        },
        {
            name: 'css',
            src: '/img/image_language/css.png',
        },
        {
            name: 'js',
            src: '/img/image_language/js.png',
        },
        {
            name: 'ts',
            src: '/img/image_language/ts.png',
        },
        {
            name: 'react',
            src: '/img/image_language/react.png',
        },
        {
            name: 'nodejs',
            src: '/img/image_language/nodejs.png',
        },
        {
            name: 'sqlserver',
            src: '/img/image_language/sqlserver.png',
        },
        {
            name: 'mongodb',
            src: '/img/image_language/mongodb.png',
        },
        {
            name: 'github',
            src: '/img/image_language/github.png',
        },
        {
            name: 'vscode',
            src: '/img/image_language/vscode.png',
        },
    ],

    // render recent works
    renderRecentWork: function (projects) {
        const htmls = projects.map((project, index) => {
            return `
                <div class="recentWork__container--item" data-index="${index}">
                    <div class="item">
                        <div class="item__thumb">
                            <div class="item__title">
                                <p>${project.type}</p>
                                <h3>${project.name}</h3>
                            </div>
                            <div class="item__link">
                                <a href="${project.link}" target="_blank">
                                    <button class="button">Link</button>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            `;
        });
        recentWorkContainer.innerHTML = htmls.join('');
    },

    everythingFilter: function () {
        everything_btn.onclick = () => {
            this.renderRecentWork(this.projects);
        };
    },

    webFilter: function () {
        web_btn.onclick = () => {
            const web = this.projects.filter((project) => {
                return project.type === 'Website';
            });
            this.renderRecentWork(web);
        };
    },

    appFilter: function () {
        app_btn.onclick = () => {
            const app = this.projects.filter((project) => {
                return project.type === 'App';
            });
            this.renderRecentWork(app);
        };
    },

    landingPageFilter: function () {
        landingPage_btn.onclick = () => {
            const landingPage = this.projects.filter((project) => {
                return project.type === 'Landing page';
            });
            this.renderRecentWork(landingPage);
        };
    },

    designFilter: function () {
        design_btn.onclick = () => {
            const design = this.projects.filter((project) => {
                return project.type === 'Design';
            });
            this.renderRecentWork(design);
        };
    },

    // render skills
    renderSkills: function (skills) {
        const htmls = skills.map((skill, index) => {
            return `
                <div class="skill__container--item" data-index="${index}">
                    <img src="${skill.src}" alt="${skill.name}" class="skill__item-image"/>
                </div>
            
            `;
        });
        skillContainer.innerHTML = htmls.join('');
    },

    start: function () {
        this.renderRecentWork(this.projects);
        this.renderSkills(this.skills);
        this.everythingFilter();
        this.webFilter();
        this.appFilter();
        this.landingPageFilter();
        this.designFilter();
    },
};

app.start();
