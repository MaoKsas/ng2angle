
const Home = {
    text: 'Home',
    link: '/home',
    icon: 'icon-home'
};

const Material = {
    text: "Material",
    link: "/material",
    icon: "fa fa-shield-alt",
    submenu: [
        {
            text: "Cards",
            link: "/material/cards"
        },
        {
            text: "Forms",
            link: "/material/forms"
        },
        {
            text: "Inputs",
            link: "/material/inputs"
        },
        {
            text: "Lists",
            link: "/material/lists"
        },
        {
            text: "Whiteframe",
            link: "/material/whiteframe"
        },
        {
            text: "Colors",
            link: "/material/colors"
        },
        {
            text: "ng2Material",
            link: "/material/ngmaterial"
        }
    ],
    "alert": "new",
    "label": "badge badge-primary"
};


const headingMain = {
    text: 'Main Navigation',
    heading: true
};

export const menu = [
    headingMain,
    Home,
    Material
];
