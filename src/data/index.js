import Home from '../views/Home/Home';
 import Blog from '../views/Blog/Blog';
// import Home from '../views/Home/Home';

export default {
    menu: [
        { title: 'Home', icon: 'fa-home', path: '/', component: Home },
         { title: 'Blog', icon: 'fa-dashboard', path: '/blog', component: Blog },
        // { title: 'Contact US', icon: 'fa-user', url: 'contact-us', component: Contact },

    ]
};
