import InfoRow from '../../components/info-row';
import Container from '../../components/container';
import Button from '../../components/button';
import Account from '../../components/account';
import avatar from '../../../static/images/avatar.png';
import Validation from '../../utils/Validation';
import { ITempObj } from '../../utils/Interfaces';

const validation = new Validation();

const rowsData = [
    { item: 'Почта', info: 'pochta@yandex.ru', id: 'email' },
    { item: 'Логин', info: 'ivanivanov', id: 'login' },
    { item: 'Имя', info: 'Иван', id: 'first_name' },
    { item: 'Фамилия', info: 'Иванов', id: 'second_name' },
    { item: 'Имя в чате', info: 'Иван', id: 'display_name' },
    { item: 'Телефон', info: '+7 (777) 777 77 77', id: 'phone' },
];
const rows = rowsData.map(
    (element) =>
        new InfoRow({
            ...element,
            required: true,
            type: element.id === 'phone' ? 'tel' : 'text',
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
        }),
);

const button = new Button({ title: 'Сохранить', type: 'submit' });

const EditProfile = new Container({
    children: new Account({
        avatar,
        rows,
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
                }
            },
        },
    }),
});

export default EditProfile;
