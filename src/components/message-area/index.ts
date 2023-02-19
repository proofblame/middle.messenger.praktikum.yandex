import Handlebars from 'handlebars';
import { tpl } from './message-area.tpl';
import { IMessage, TPropsDefault } from '../../utils/Interfaces';
import Block from '../../utils/Block';

import './message-area.css';
import store from '../../utils/store';
import { connect } from '../../utils/highOrderComponents';

type TProps = {
    messages: IMessage[];
} & TPropsDefault;

Handlebars.registerHelper('isAuthor', (value) => value === store.getState().user?.id);
Handlebars.registerHelper('getTime', (value) => new Date(value).toLocaleTimeString());

class MessageArea extends Block<TProps> {
    render() {
        return this.compile(tpl, {
            messages: this.props.messages,
        });
    }
}

const tempM = [{}];

const MessageWrapState = connect((state) => ({
    messages: state.messages,
}));

const MessageWithState = MessageWrapState(MessageArea);

const MessageState = new MessageWithState({
    messages: tempM,
});

export default MessageState;
