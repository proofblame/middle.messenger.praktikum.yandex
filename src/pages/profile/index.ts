import InfoRow from '../../components/info-row';
import Container from '../../components/container';
import Account from '../../components/account';
import avatar from '../../../static/images/avatar.png';
import { connect } from '../../utils/highOrderComponents';
import Router from '../../utils/Router';
import { BASE_URL } from '../../api/Base.api';
import { UserController } from '../../controllers/profile.ctrl';

const router = new Router('root');

const rowsData = [
    {
        item: 'Почта',
        disabled: 'disabled',
        name: 'email',
    },
    {
        item: 'Логин',
        disabled: 'disabled',
        name: 'login',
    },
    {
        item: 'Имя',
        disabled: 'disabled',
        name: 'first_name',
    },
    {
        item: 'Фамилия',
        disabled: 'disabled',
        name: 'second_name',
    },
    {
        item: 'Имя в чате',
        disabled: 'disabled',
        name: 'display_name',
    },
    {
        item: 'Телефон',
        disabled: 'disabled',
        name: 'phone',
    },
];

const profileData = rowsData.map((i) => {
    const A = connect((state) => ({
        ...i,
        info: state.user?.[i.name],
    }));
    const B = A(InfoRow);
    return new B({
        ...i,
        info: '-',
    });
});

const buttonsDataTemp = [
    {
        item: 'Изменить данные',
        events: {
            click: () => {
                router.go('/profile-change');
            },
        },
    },
    {
        item: 'Изменить пароль',
        events: {
            click: () => {
                router.go('/password-change');
            },
        },
    },
    {
        item: 'Выйти',
        className: 'color-red',
        events: {
            click: () => {
                UserController.logoutUser();
            },
        },
    },
];

const ProfileWrapState = connect((state) => ({
    url: `${BASE_URL}/resources${state.user?.avatar}`,
}));

// const ProfileWithState = ProfileWrapState(Avatar);

// const rows = rowsData.map((el) => new InfoRow(el));
const buttons = buttonsDataTemp.map(
    (el) =>
        new InfoRow({
            ...el,
        }),
);

const userName = 'Иван';

const Profile = new Container({
    children: new Account({
        avatar,
        userName,
        profileData,
        buttons,
    }),
});

export default Profile;
