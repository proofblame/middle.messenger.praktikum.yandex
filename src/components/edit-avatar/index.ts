import { tpl } from './edit-avatar.tpl';
import { TPropsDefault } from '../../utils/Interfaces';
import Block from '../../utils/Block';
import './edit-avatar.css';

type TProps = {} & TPropsDefault;

export default class EditAvatar extends Block<TProps> {
    render() {
        return this.compile(tpl, {
            children: this.children,
        });
    }
}
