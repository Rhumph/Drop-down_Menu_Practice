import * as webdevTools from './basic-webdev-tools.js';

const mainContent = document.querySelector('body');

document.addEventListener('DOMContentLoaded', () => {
    webdevTools.createDropDownMenu(mainContent, "home", ["home", "about", "contact", "services", "portfolio"]);
    webdevTools.imageCarousel(mainContent, 5000, ['images/image1.jpg', 'images/image2.jpg', 'images/image3.jpg']);
});


