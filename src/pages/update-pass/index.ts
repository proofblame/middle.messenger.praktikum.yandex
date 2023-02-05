import InfoRow from '../../components/info-row';
import Container from '../../components/container';
import Button from '../../components/button';
import Account from '../../components/account';
import Validation from '../../utils/Validation';
import { ITempObj } from '../../utils/Interfaces';
import avatar from '../../../static/images/avatar.png';

const validation = new Validation();

const rowsData = [
    {
        item: 'Старый пароль',
        info: '.........',
        id: 'oldPassword',
    },
    { item: 'Новый пароль', info: '............', id: 'password' },
    {
        item: 'Повторите новый пароль',
        info: '............',
        id: 'confirm_password',
    },
];
const rows = rowsData.map((element) => new InfoRow({
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
}));

const button = new Button({ title: 'Сохранить' });

const UpdatePass = new Container({
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
                    });
                    console.log(data);
                }
            },
        },
    }),
});

export default UpdatePass;
