import './index.css';
import Login from './pages/login';
import Register from './pages/register';
import Error404 from './pages/error-404';
import Error500 from './pages/error-500';
import Profile from './pages/profile';
import EditProfile from './pages/edit-profile';
import UpdatePass from './pages/update-pass';
import UpdateAvatar from './pages/update-avatar';
import Chat from './pages/chat';
import { LoginController } from './controllers/login.ctrl';
import Router from './utils/Router';

const router = new Router('root');

router
    .setUnprotectedPaths(['/', '/signup'])
    .onRoute(LoginController.checkAuth)
    .onNotRoute(LoginController.checkNotAuth)
    .use('/', Login)
    .use('/500', Error500)
    .use('/signup', Register)
    .use('/messenger', Chat)
    .use('/account', Profile)
    .use('/account/edit', EditProfile)
    .use('/account/change-password', UpdatePass)
    .use('/account/avatar', UpdateAvatar)
    .use('*', Error404)
    .start();
