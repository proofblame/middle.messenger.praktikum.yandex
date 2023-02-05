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
import renderDOM from './utils/renderDOM';

const path = window.location.pathname;

switch (path) {
case '/':
    renderDOM('root', Chat);
    break;
case '/account':
    renderDOM('root', Profile);
    break;
case '/account/edit':
    renderDOM('root', EditProfile);
    break;
case '/account/change-password':
    renderDOM('root', UpdatePass);
    break;
case '/account/avatar':
    renderDOM('root', UpdateAvatar);
    break;
case '/signin':
    renderDOM('root', Login);
    break;
case '/signup':
    renderDOM('root', Register);
    break;
case '/500':
    renderDOM('root', Error500);
    break;
default:
    renderDOM('root', Error404);
}
