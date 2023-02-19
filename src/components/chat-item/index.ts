import Handlebars from 'handlebars';
import { tpl } from './chat-item.tpl';
import { IChat, TPropsDefault } from '../../utils/Interfaces';
import Block from '../../utils/Block';
import './chat-item.css';
import { connect } from '../../utils/highOrderComponents';
import store from '../../utils/store';
import { UserChatController } from '../../controllers/chats.ctrl';

type TProps = {
    chats: IChat[];
} & TPropsDefault;

Handlebars.registerHelper('getTime', (value) => new Date(value).toLocaleTimeString());

class ChatItems extends Block<TProps> {
    render() {
        return this.compile(tpl, {
            chats: this.props.chats,
        });
    }
}

const tempCI = [{}];

const ChatItemsWrapState = connect((state) => ({
    chats: state.filteredChats,
}));

const ChatItemsWithState = ChatItemsWrapState(ChatItems);

const ChatItemsState = new ChatItemsWithState({
    chats: tempCI,
    events: {
        click: (event: any) => {
            const parent = event.target.closest('.chat-item');
            if (!parent.classList.contains('active')) {
                UserChatController.setActiveChat(parent, store.getState().user.id);
                const mes = document.getElementById('message') as HTMLTextAreaElement;
                mes.value = '';
            }
            const wrapper = event.target.closest('.chats-wrapper');
            if (!wrapper.classList.contains('active')) {
                wrapper.classList.add('active');
            }
        },
    },
});

export default ChatItemsState;
