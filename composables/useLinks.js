const links = [
    {name: 'Projects', route: '/projects'},
    {name: 'About', route: '/about'},
    {name: 'Contact',route: '/contact', },
];

const lastLink = () => links[links.length-1];

export const useLinks = () => {  return {
    links, lastLink
}}
