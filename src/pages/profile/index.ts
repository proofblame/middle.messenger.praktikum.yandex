import InfoRow from '../../components/info-row';
import Container from '../../components/container';
import Account from '../../components/account';
import { connect } from '../../utils/highOrderComponents';
import Router from '../../utils/Router';
import { BASE_URL } from '../../api/Base.api';
import { UserController } from '../../controllers/profile.ctrl';
import Avatar from '../../components/avatar';

const router = new Router('root');

const profileDataTemp = [
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
        item: 'Имя в чате',
        disabled: 'disabled',
        name: 'display_name',
    },
    {
        item: 'Фамилия',
        disabled: 'disabled',
        name: 'second_name',
    },

    {
        item: 'Телефон',
        disabled: 'disabled',
        name: 'phone',
    },
];

const profileData = profileDataTemp.map((i) => {
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

const AvatarWrapState = connect((state) => ({
    url: `${BASE_URL}/resources${state.user?.avatar}`,
}));

const AvatarWithState = AvatarWrapState(Avatar);

// const rows = rowsData.map((el) => new InfoRow(el));
const buttons = buttonsDataTemp.map(
    (el) =>
        new InfoRow({
            ...el,
        }),
);

const userName = 'Иван';

const Profile = new Container({
    backArrow: true,
    children: new Account({
        avatar: new AvatarWithState({
            url: '',
            events: {
                change: (event: Event) => {
                    const { files }: { files: FileList | null } = event.target as HTMLInputElement;
                    if (!files?.length) {
                        return;
                    }
                    const [file] = files;
                    const formData = new FormData();
                    formData.append('avatar', file);
                    UserController.changeUserAvatar(formData);
                },
            },
        }),
        userName,
        profileData,
        buttons,
    }),
    events: {
        click: (e: Event) => {
            const target = e.target as HTMLElement;
            if (target.id === 'back') {
                router.back();
            }
        },
    },
});

export default Profile;
