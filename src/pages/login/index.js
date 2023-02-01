import tpl from './login.hbs';
import Input from '../../components/input';
import Form from '../../components/form';
import Container from '../../components/container';

const inputs = [
    Input({ name: 'login', title: 'Логин', type: 'text' }),
    Input({ name: 'password', title: 'Пароль', type: 'password' }),
];

const form = Form({
    inputs,
    id: 'login',
    formTitle: 'Вход',
    buttonName: 'Авторизоваться',
    routePath: '/signup',
    linkName: 'Нет аккаунта?',
});

export default (props) => Container({ children: tpl({ form, ...props }) });
