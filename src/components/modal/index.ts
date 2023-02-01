import { tpl } from './modal.tpl';
import { TPropsDefault } from '../../utils/Interfaces';
import Block from '../../utils/Block';
import './modal.css';

type TProps = {} & TPropsDefault;

export default class Modal extends Block<TProps> {
    render() {
        return this.compile(tpl, {
            children: this.children,
        });
    }
}
