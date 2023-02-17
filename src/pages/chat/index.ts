import { tpl } from './chat.tpl';
import './chat.css';
import ChatItem from '../../components/chat-item';
import MessageState from '../../components/message-area';
import Validation from '../../utils/Validation';
import Block from '../../utils/Block';
import { ITempObj, TPropsDefault } from '../../utils/Interfaces';
import MessageCompose from '../../components/message-compose';
import { UserChatController } from '../../controllers/chats.ctrl';
import { connect } from '../../utils/highOrderComponents';

UserChatController.getAllChats();

const validation = new Validation();

type TProps = {} & TPropsDefault;

class Chats extends Block<TProps> {
    render() {
        return this.compile(tpl, {
            chats: this.props.chats,
            messages: this.props.messages,
            chatTitle: this.props.chatTitle,
        });
    }
}

const ChatsWrapState = connect((state) => ({
    chatTitle: state.active?.chat?.title,
}));

const ChatsWithState = ChatsWrapState(Chats);

const ChatsPage = new ChatsWithState({
    chats: ChatItem,
    messages: MessageState,
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
