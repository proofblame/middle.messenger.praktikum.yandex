import { tpl } from './chat-item.tpl';
import { TPropsDefault } from '../../utils/Interfaces';
import Block from '../../utils/Block';
import './chat-item.css';

type TProps = {
    name: string;
    time: string;
    message: string;
    newMessages: string;
    title: string;
} & TPropsDefault;

export default class ChatItem extends Block<TProps> {
    render() {
        return this.compile(tpl, {
            name: this.props.name,
            time: this.props.time,
            message: this.props.message,
            newMessages: this.props.newMessages,
            title: this.props.title,
        });
    }
}
