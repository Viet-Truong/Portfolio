import Typed from "./node_modules/typed.js/lib/typed";

var Typed = require("./typed.min.js");
var typed = new Typed("#header-search-input", {
    strings: [
        "",
        "I'm a Front-End Developer",
        "I'm a Designer",
        "I'm a Android Developer",
    ],
    attr: "placeholder",
    startDelay: 50,
    typeSpeed: 50,
    backSpeed: 50,
    smartBackspace: true,
    loop: true,
    loopCount: Infinity,
});

// Recent work logic
var container = document.querySelector(".recentWork__container");
arr = [
    {
        src: "./img/tiktok.JPG",
        type: "web",
    },
    {
        src: "./img/chatapp.JPG",
        type: "web",
    },
    {
        src: "./img/music.png",
        type: "web",
    },
    {
        src: "./img/port.png",
        type: "lading_page",
    },
    {
        src: "./img/blog.png",
        type: "lading_page",
    },
    {
        src: "./img/appmusic.jpg",
        type: "app",
    },
    {
        src: "./img/quanlinhahang.png",
        type: "app",
    },
    {
        src: "./img/tour.png",
        type: "design",
    },
];

var container_img = document.createElement("div");
container_img.className = "recentWork__container--img";

container.append(container_img);
