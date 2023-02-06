import { tpl } from './message-compose.tpl';
import Block from '../../utils/Block';
import { TPropsDefault } from '../../utils/Interfaces';

import './message-compose.css';

type TProps = {} & TPropsDefault;

export default class MessageCompose extends Block<TProps> {
    render() {
        return this.compile(tpl, {});
    }
}
