import Input from '../../components/input';
import Form from '../../components/form';
import Container from '../../components/container';
import Validation from '../../utils/Validation';
import { UserSignUpController } from '../../controllers/signup.ctrl';

const validation = new Validation();

const inputsData = [
    { id: 'email', title: 'Почта', type: 'text' },
    { id: 'login', title: 'Логин', type: 'text' },
    { id: 'first_name', title: 'Имя', type: 'text' },
    { id: 'second_name', title: 'Фамилия', type: 'text' },
    { id: 'phone', title: 'Телефон', type: 'tel' },
    { id: 'password', title: 'Пароль', type: 'password' },
    { id: 'confirm_password', title: 'Пароль (еще раз)', type: 'password' },
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
                    if (target.id === 'email') {
                        if (!validation.email(target.value)) {
                            validation.showError(target);
                        }
                    }
                    if (target.id === 'phone') {
                        if (!validation.phone(target.value)) {
                            validation.showError(target);
                        }
                    }
                    if (target.id === 'first_name' || target.id === 'second_name') {
                        if (!validation.names(target.value)) {
                            validation.showError(target);
                        }
                    }
                    if (target.id === 'confirm_password') {
                        if (!validation.confirmPassword(target, target.value)) {
                            validation.showError(target);
                        }
                    }
                },
            },
        }),
);

const Register = new Container({
    children: new Form({
        inputs,
        id: 'register',
        formTitle: 'Регистрация',
        buttonName: 'Зарегистрироваться',
        routePath: '/',
        linkName: 'Войти',
        events: {
            submit: (event: Event) => {
                event.preventDefault();
                const target = event.target as HTMLFormElement;
                if (validation.check(target)) {
                    const inputFields = target.querySelectorAll('[data-required=true]');
                    const data: any = {};
                    inputFields.forEach((current: HTMLInputElement) => {
                        data[current.id] = current.value;
                    });
                    delete data.confirm_password;
                    UserSignUpController.registration(data);
                }
            },
        },
    }),
});

export default Register;
