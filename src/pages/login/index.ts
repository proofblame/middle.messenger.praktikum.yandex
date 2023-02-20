import Input from '../../components/input';
import Form from '../../components/form';
import Container from '../../components/container';
import Validation from '../../utils/Validation';
import { LoginController } from '../../controllers/login.ctrl';
import { ILoginFormModel } from '../../utils/Interfaces';

const validation = new Validation();

const inputsData = [
    { id: 'login', name: 'Логин', type: 'text' },
    { id: 'password', name: 'Пароль', type: 'password' },
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
        formTitle: 'Вход',
        buttonName: 'Авторизоваться',
        linkName: 'Нет аккаунта?',
        routePath: '/signup',
        id: 'loginForm',
        events: {
            submit: (event: Event) => {
                event.preventDefault();
                const target = event.target as HTMLFormElement;
                if (validation.check(target)) {
                    const inputFields = target.querySelectorAll('[data-required=true]');
                    const data: ILoginFormModel = {
                        login: '',
                        password: '',
                    };
                    inputFields.forEach((current: HTMLInputElement) => {
                        const _id = current.id as keyof ILoginFormModel;
                        data[_id] = current.value;
                    });
                    LoginController.login(data);
                }
            },
        },
    }),
});

export default Login;
