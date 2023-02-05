import { tpl } from '../../templates/account/account.tpl';
import InfoRow from '../../components/info-row';
import Container from '../../components/container';
import Account from '../../components/account';
import avatar from '../../../static/images/avatar.png';

const rowsData = [
    {
        item: 'Почта',
        info: 'pochta@yandex.ru',
        disabled: 'disabled',
        name: 'email',
    },
    {
        item: 'Логин',
        info: 'ivanivanov',
        disabled: 'disabled',
        name: 'login',
    },
    {
        item: 'Имя',
        info: 'Иван',
        disabled: 'disabled',
        name: 'first_name',
    },
    {
        item: 'Фамилия',
        info: 'Иванов',
        disabled: 'disabled',
        name: 'second_name',
    },
    {
        item: 'Имя в чате',
        info: 'Иван',
        disabled: 'disabled',
        name: 'display_name',
    },
    {
        item: 'Телефон',
        info: '+7 (777) 777 77 77',
        disabled: 'disabled',
        name: 'phone',
    },
];

const buttonsData = [{ item: 'Изменить данные' }, { item: 'Изменить пароль' }, { item: 'Выйти', className: 'color-red' }];

const rows = rowsData.map((el) => new InfoRow(el));
const buttons = buttonsData.map((el) => new InfoRow(el));

const userName = 'Иван';

const Profile = new Container({
    children: new Account({
        avatar,
        userName,
        rows,
        buttons,
    }),
});

export default Profile;
