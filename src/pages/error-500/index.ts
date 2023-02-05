import Container from '../../components/container';
import ErrorPage from '../../components/error-page';

const Error500 = new Container({
    children: new ErrorPage({
        number: 500,
        message: 'Мы уже фиксим',
    }),
});

export default Error500;
