import { tpl } from './message-area.tpl';
import { IMessage, TPropsDefault } from '../../utils/Interfaces';
import Block from '../../utils/Block';

import './message-area.css';
import store from '../../utils/store';
import { connect } from '../../utils/highOrderComponents';

const Handlebars = require('handlebars/dist/cjs/handlebars');

type TProps = {
    messages: IMessage[];
} & TPropsDefault;
// @ts-ignore
Handlebars.registerHelper('isAuthor', (value: string) => value === store.getState().user?.id);
Handlebars.registerHelper('getTime', (value: string | number | Date) => new Date(value).toLocaleTimeString());

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
