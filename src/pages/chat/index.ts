import { tpl } from './chat.tpl';
import './chat.css';
import ChatItem from '../../components/chat-item';
import MessageState from '../../components/message-area';
import Block from '../../utils/Block';
import { TPropsDefault } from '../../utils/Interfaces';
import MessageCompose from '../../components/message-compose';
import { UserChatController } from '../../controllers/chats.ctrl';
import { connect } from '../../utils/highOrderComponents';
import Router from '../../utils/Router';
import store from '../../utils/store';
import { ChatController } from '../../controllers/message.ctrl';

UserChatController.getAllChats();

type TProps = {} & TPropsDefault;

class Chats extends Block<TProps> {
    render() {
        return this.compile(tpl, {
            chatsData: this.props.chatsData,
            messagesData: this.props.messagesData,
            messageCompose: this.props.messageCompose,
            chatTitle: this.props.chatTitle,
        });
    }
}

const ChatsWrapState = connect((state) => ({
    chatTitle: state.active?.chat?.title,
}));

const ChatsWithState = ChatsWrapState(Chats);

const ChatsPage = new ChatsWithState({
    chatsData: ChatItem,
    chatTitle: '',
    messagesData: MessageState,
    events: {
        click: (event: Event) => {
            event.preventDefault();
            const target = event.target as HTMLInputElement;
            if (target.id === 'chats-btn-profile') {
                const router = new Router('root');
                router.go('/profile');
            }
            if (target.id === 'chats-header--btn') {
                UserChatController.createChat();
            }
            if (target.classList.contains('chats-messages__option-delete')) {
                UserChatController.deleteChat();
            }
            if (target.classList.contains('chats-messages__option-delete-user')) {
                UserChatController.deleteUserFromChat();
            }
            if (target.classList.contains('chats-messages__option-add')) {
                UserChatController.addUserFromChat();
            }
            if (target.classList.contains('chats__header-lope')) {
                const { value } = document.querySelector('.chats__header-input') as HTMLInputElement;
                store.set(
                    'filteredChats',
                    store
                        .getState()
                        .chats.filter((chat: any) => chat.title.toLowerCase().includes(value.toLowerCase())),
                );
            }
        },
    },
    messageCompose: new MessageCompose({
        events: {
            click: (event: Event) => {
                event.preventDefault();
                const target = event.target as HTMLFormElement;
                if (target.classList.contains('chats-messages__submit')) {
                    const mes = document.getElementById('message') as HTMLInputElement;
                    if (mes.value) {
                        ChatController.sendMessage(mes.value);
                        mes.value = '';
                    }
                }
            },
        },
    }),
});

export default ChatsPage;
