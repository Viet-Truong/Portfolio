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

const container = document.querySelector('.recentWork__container');
const everything_btn = document.querySelector('.recentWork__title--everything');
const web_btn = document.querySelector('.recentWork__title--web');
const app_btn = document.querySelector('.recentWork__title--app');
const landingPage_btn = document.querySelector(
    '.recentWork__title--landing-page'
);
const design_btn = document.querySelector('.recentWork__title--design');

const app = {
    projects: [
        {
            name: 'Rent motorbike',
            src: './img/rent_moto.PNG',
            type: 'Website',
            link: 'https://rent-moto-ui.vercel.app/',
        },
        {
            name: 'Tiktok clone',
            src: './img/tiktok.JPG',
            type: 'Website',
            link: 'https://tiktok-ui-liart.vercel.app/',
        },
        {
            name: 'Chat app',
            src: './img/chatapp.JPG',
            type: 'Website',
            link: 'https://chat-app-xi-nine.vercel.app/',
        },
        {
            name: 'Music player',
            src: './img/music.png',
            type: 'Website',
            link: 'https://music-player-inky-nu.vercel.app/',
        },
        {
            name: 'Portfolio',
            src: './img/port.png',
            type: 'Landing page',
            link: 'https://portfolio-eosin-five-34.vercel.app/',
        },
        {
            name: 'Blog Da Lat',
            src: './img/blog.png',
            type: 'Landing page',
            link: 'https://f8-blog.vercel.app/',
        },
        {
            name: 'Quan Li Ban Hang',
            src: './img/quanlinhahang.png',
            type: 'App',
            link: 'https://github.com/ZuKerNo1/Quan-Li-Nha-Hang',
        },
        {
            name: 'Tour UI/UX design',
            src: './img/tour.png',
            type: 'Design',
            link: 'https://www.figma.com/proto/YTtuTFksEh3101KhcKxDb9/BVT_67_CuoiKy?node-id=3-2&scaling=min-zoom&page-id=0%3A1&starting-point-node-id=3%3A2&mode=design&t=xeQCUYGH8a9XMVrO-1',
        },
    ],

    // render recent works
    render: function (projects) {
        const htmls = projects.map((project, index) => {
            return `
                <div class="recentWork__container--item" data-index="${index}">
                    <a class="image" href='${project.link}' target="_blank">
                        <div class="item">
                            <div class="item__thumb">
                                <p>${project.type}</p>
                                <h3>${project.name}</h3>
                            </div>
                        </div>
                    </a>
                </div>
            `;
        });
        container.innerHTML = htmls.join('');
    },

    start: function () {
        this.render(this.projects);
    },
};

app.start();
