import Container from '../../components/container';
import ErrorPage from '../../components/error-page';

const Error404 = new Container({
    children: new ErrorPage({
        number: 404,
        message: 'Не туда попали',
        routePath: '/messenger',
    }),
});

export default Error404;
