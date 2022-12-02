import Home from '../pages/Home';
import Following from '../pages/Following';
import Profile from '../pages/Profile';
import Uploads from '../pages/Upload';

//public routers
const publicRoutes = [
    { path: '/', component: Home },
    { path: '/following', component: Following },
    { path: '/profile', component: Profile },
    { path: '/upload', component: Uploads, layout: null },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
