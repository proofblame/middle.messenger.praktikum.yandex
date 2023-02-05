import { TPropsDefault } from '../../utils/Interfaces';
import { tpl } from './account.tpl';
import Block from '../../utils/Block';

import './account.css';

type TProps = {
    avatar: string;
    userName?: string;
} & TPropsDefault;

export default class Account extends Block<TProps> {
    render() {
        return this.compile(tpl, {
            avatar: this.props.avatar,
            userName: this.props.userName,
            children: this.children,
        });
    }
}
