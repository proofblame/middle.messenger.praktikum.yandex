import Input from '../../components/input';
import Form from '../../components/form';
import Container from '../../components/container';
import Validation from '../../utils/Validation';
import { ITempObj } from '../../utils/Interfaces';

const validation = new Validation();

const inputsData = [
    { id: 'login', title: 'Логин', type: 'text' },
    { id: 'password', title: 'Пароль', type: 'password' },
];

const inputs = inputsData.map(
    (input) =>
        new Input({
            ...input,
            required: true,
            events: {
                focus: (event: Event) => {
                    validation.hideError(event.target as HTMLInputElement);
                },
                blur: (event: Event) => {
                    const target = event.target as HTMLInputElement;
                    if (target.id === 'login') {
                        if (!validation.login(target.value)) {
                            validation.showError(target);
                        }
                    }
                    if (target.id === 'password') {
                        if (!validation.password(target.value)) {
                            validation.showError(target);
                        }
                    }
                },
            },
        }),
);

const Login = new Container({
    children: new Form({
        inputs,
        id: 'login',
        formTitle: 'Вход',
        buttonName: 'Авторизоваться',
        routePath: '/signup',
        linkName: 'Нет аккаунта?',
        events: {
            submit: (event: Event) => {
                event.preventDefault();
                const target = event.target as HTMLFormElement;
                if (validation.check(target)) {
                    const inputFields = target.querySelectorAll('[data-required=true]');
                    const data: ITempObj = {};
                    inputFields.forEach((current: HTMLInputElement) => {
                        data[current.id] = current.value;
                    });
                    console.log(data);
                }
            },
        },
    }),
});

export default Login;
