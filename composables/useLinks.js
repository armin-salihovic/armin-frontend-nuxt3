const links = [
    {name: 'Projects', route: '/projects'},
    {name: 'About', route: '/about'},
    {name: 'Music', route: '/music', },
    {name: 'Contact',route: '/contact', },
];

const mediaLinks = [
    {name: 'Github',route: 'https://github.com/armin-salihovic', },
    {name: 'LinkedIn',route: 'https://www.linkedin.com/in/armin-salihovic/', },
    {name: 'hello@armin.ba',route: 'mailto:hello@armin.ba', },
];

function getFirstLinks(n) {
    return links.filter((link, index) => index < n);
}

const lastLink = () => links[links.length-1];

export const useLinks = () => {  return {
    links, mediaLinks, getFirstLinks, lastLink
}}
