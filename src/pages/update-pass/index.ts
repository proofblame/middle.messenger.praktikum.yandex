import InfoRow from '../../components/info-row';
import Container from '../../components/container';
import Button from '../../components/button';
import Account from '../../components/account';
import Validation from '../../utils/Validation';
import { ITempObj } from '../../utils/Interfaces';
import avatar from '../../../static/images/avatar.png';
import { UserController } from '../../controllers/profile.ctrl';

const validation = new Validation();

const rowsData = [
    {
        item: 'Старый пароль',
        name: 'old_password',
    },
    { item: 'Новый пароль', name: 'password' },
    {
        item: 'Повторите новый пароль',
        name: 'confirm_password',
    },
];
const profileData = rowsData.map(
    (element) =>
        new InfoRow({
            ...element,
            required: true,
            type: 'password',
            events: {
                focus: (event: Event) => {
                    validation.hideError(event.target as HTMLInputElement);
                },
                blur: (event: Event) => {
                    const target = event.target as HTMLInputElement;
                    if (target.id === 'confirm_password') {
                        if (!validation.confirmPassword(target, target.value)) {
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

const button = new Button({ title: 'Сохранить', type: 'submit' });

const UpdatePass = new Container({
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
                        if (current.id === 'password') {
                            data.newPassword = current.value;
                        } else if (current.id === 'old_password') {
                            data.oldPassword = current.value;
                        }
                    });
                    UserController.changeUserPassword(data);
                }
            },
        },
    }),
});

export default UpdatePass;
