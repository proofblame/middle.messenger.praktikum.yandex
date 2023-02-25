import InfoRow from '../../components/info-row';
import Container from '../../components/container';
import Button from '../../components/button';
import Account from '../../components/account';
import Validation from '../../utils/Validation';
import { ITempObj } from '../../utils/Interfaces';
import { connect } from '../../utils/highOrderComponents';
import { UserController } from '../../controllers/profile.ctrl';
import Router from '../../utils/Router';

const validation = new Validation();

const rowsData = [
    { item: 'Почта', name: 'email' },
    { item: 'Логин', name: 'login' },
    { item: 'Имя', name: 'first_name' },
    { item: 'Фамилия', name: 'second_name' },
    { item: 'Имя в чате', name: 'display_name' },
    { item: 'Телефон', name: 'phone' },
];
const profileData = rowsData.map((element) => {
    const A = connect((state) => ({
        ...element,
        required: true,
        type: element.name === 'phone' ? 'tel' : 'text',
        info: state.user?.[element.name],
    }));
    const B = A(InfoRow);
    return new B({
        info: '-',
        ...element,
        required: true,
        type: element.name === 'phone' ? 'tel' : 'text',
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
                if (target.id === 'display_name') {
                    if (!validation.checkEmptyValue(target.value)) {
                        validation.showError(target);
                    }
                }
                if (target.id === 'first_name' || target.id === 'second_name') {
                    if (!validation.names(target.value)) {
                        validation.showError(target);
                    }
                }
            },
        },
    });
});

const button = new Button({ title: 'Сохранить', type: 'submit' });

const EditProfile = new Container({
    backArrow: true,
    children: new Account({
        profileData,
        button,
        events: {
            submit: (event: Event) => {
                event.preventDefault();
                const target = event.target as HTMLFormElement;
                if (validation.check(target)) {
                    const inputFields = target.querySelectorAll('[data-required=true]');
                    const data: ITempObj = {};
                    inputFields.forEach((current: HTMLInputElement) => {
                        data[current.id] = current.value;
                        console.log(data);
                    });
                    UserController.changeUserProfileData(data);
                }
            },
        },
    }),
    events: {
        click: (e: Event) => {
            const target = e.target as HTMLElement;
            if (target.id === 'back') {
                const router = new Router('root');
                router.back();
            }
        },
    },
});

export default EditProfile;
