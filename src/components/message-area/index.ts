import { tpl } from './message-area.tpl';
import { TPropsDefault } from '../../utils/Interfaces';
import Block from '../../utils/Block';

import './message-area.css';

type TProps = {
    isMe?: boolean;
    text: string;
    time: string;
} & TPropsDefault;

export default class MessageArea extends Block<TProps> {
    render() {
        return this.compile(tpl, {
            isMe: this.props.isMe,
            text: this.props.text,
            time: this.props.time,
        });
    }
}
