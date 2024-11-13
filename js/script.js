import MenuMobile from "./modules/MenuMobile.js";
import ScrollAnimation from "./modules/ScrollAnimation.js";
import SlideNav from "./modules/slidenav.js";11
import LinkSmoot from "./modules/linksSmoot.js";

const menu = new MenuMobile('.toggle','.menu','.line');
menu.start()

const scroll = new ScrollAnimation('.scroll')

scroll.start()

const slide = new SlideNav('.slide','.wrapper');

slide.start()

slide.addControl('.custom-control');

const links = new LinkSmoot('.menu a[href^="#"]')

links.start()


const links1 = new LinkSmoot('.footer-links a[href^="#"]')

links1.start()