import { tpl } from './chat.tpl';
import './chat.css';
import ChatItem from '../../components/chat-item';
import Message from '../../components/message-area';
import Validation from '../../utils/Validation';
import Block from '../../utils/Block';
import { ITempObj, TPropsDefault } from '../../utils/Interfaces';
import MessageCompose from '../../components/message-compose';
import { UserChatController } from '../../controllers/chats.ctrl';
import { connect } from '../../utils/highOrderComponents';

UserChatController.getAllChats();

const validation = new Validation();

const chatsData = [
    {
        name: 'Андрей',
        message: 'Изображение',
        time: '10:49',
        newMessages: 2,
        logo: '',
    },
    {
        name: 'Киноклуб',
        message: 'Круто!',
        time: 'Понедельник',
        newMessages: null,
        logo: '',
    },
    {
        name: 'Илья',
        message:
            'Друзья, у меня для вас особенный выпуск новостей! Друзья, у меня для вас особенный выпуск новостей! Друзья, у меня для вас особенный выпуск новостей!',
        time: '15:12',
        newMessages: 4,
        logo: '',
    },
    {
        name: 'Вадим',
        message: 'Круто!',
        time: 'Понедельник',
        newMessages: null,
        logo: '',
    },
    {
        name: 'Ivan',
        message: 'Hello',
        time: '15:59',
        newMessages: 1,
        logo: '',
    },
    {
        name: 'Ivan',
        message: 'Hello',
        time: 'Вчера',
        newMessages: null,
        logo: '',
    },
    {
        name: 'Design Destroyer',
        message:
            'В 2008 году художник Jon Rafman начал собирать Rafman начал собирать Rafman начал собирать Rafman начал собирать Rafman начал собирать Rafman начал собирать',
        time: '15:59',
        newMessages: 3,
        logo: '',
    },
    {
        name: 'Ivan',
        message: 'Hello',
        time: '15:59',
        newMessages: null,
        logo: '',
    },
    {
        name: 'Day.',
        message:
            'Так увлёкся работой по курсу, что совсем забыл его анонсир Так увлёкся работой по курсу, что совсем забыл его анонсир Так увлёкся работой по курсу, что совсем забыл его анонсир',
        time: 'Понедельник',
        newMessages: null,
        logo: '',
    },
    {
        name: 'Стас Рогозин',
        message:
            'Можно или сегодня или завтра вечером. Можно или сегодня или завтра вечером. Можно или сегодня или завтра вечером.',
        time: '12 Апр 2020',
        newMessages: 5,
        logo: '',
    },
    {
        name: 'Ivan',
        message: 'Hello',
        time: '15:59',
        newMessages: 1,
        logo: '',
    },
    {
        name: 'Ivan',
        message: 'Hello',
        time: 'Вчера',
        newMessages: null,
        logo: '',
    },
    {
        name: 'Design Destroyer',
        message:
            'В 2008 году художник Jon Rafman начал собирать Rafman начал собирать Rafman начал собирать Rafman начал собирать Rafman начал собирать Rafman начал собирать',
        time: '15:59',
        newMessages: 3,
        logo: '',
    },
    {
        name: 'Ivan',
        message: 'Hello',
        time: '15:59',
        newMessages: null,
        logo: '',
    },
    {
        name: 'Day.',
        message:
            'Так увлёкся работой по курсу, что совсем забыл его анонсир Так увлёкся работой по курсу, что совсем забыл его анонсир Так увлёкся работой по курсу, что совсем забыл его анонсир',
        time: '1 Мая 2020',
        newMessages: null,
        logo: '',
    },
    {
        name: 'Стас Рогозин',
        message:
            'Можно или сегодня или завтра вечером. Можно или сегодня или завтра вечером. Можно или сегодня или завтра вечером.',
        time: '12 Апр 2020',
        newMessages: 5,
        logo: '',
    },
];
const messagesData = [
    {
        text: 'Привет! Смотри, тут всплыл интересный кусок лунной космической истории — НАСА в какой-то момент попросила Хассельблад адаптировать модель SWC для полетов на Луну. Сейчас мы все знаем что астронавты летали с моделью 500 EL — и к слову говоря, все тушки этих камер все еще находятся на поверхности Луны, так как астронавты с собой забрали только кассеты с пленкой. Хассельблад в итоге адаптировал SWC для космоса, но что-то пошло не так и на ракету они так никогда и не попали. Всего их было произведено 25 штук, одну из них недавно продали на аукционе за 45000 евро.',
        time: '15:59',
    },
    { text: 'Круто!', time: '15:59', isMe: true },
    {
        text: 'Привет! Смотри, тут всплыл интересный кусок лунной космической истории — НАСА в какой-то момент попросила Хассельблад адаптировать модель SWC для полетов на Луну. Сейчас мы все знаем что астронавты летали с моделью 500 EL — и к слову говоря, все тушки этих камер все еще находятся на поверхности Луны, так как астронавты с собой забрали только кассеты с пленкой. Хассельблад в итоге адаптировал SWC для космоса, но что-то пошло не так и на ракету они так никогда и не попали. Всего их было произведено 25 штук, одну из них недавно продали на аукционе за 45000 евро.',
        time: '15:59',
    },
    { text: 'Круто', time: '15:59', isMe: true },
];

const chats = chatsData.map((el) => new ChatItem({ ...el }));

const messages = messagesData.map(
    (el) => new Message({ ...el, className: el.isMe ? ['message-area', 'message-area_me'] : 'message-area' }),
);

type TProps = {} & TPropsDefault;

class Chats extends Block<TProps> {
    render() {
        return this.compile(tpl, {
            chats: this.props.chats,
            messages: this.props.messages,
        });
    }
}

const ChatsPage = new Chats({
    chats,
    messages,
    messageCompose: new MessageCompose({
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
                } else {
                    console.log('Введите сообщение');
                }
            },
        },
    }),
});

export default ChatsPage;
