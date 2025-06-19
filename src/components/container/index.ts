import { tpl } from './container.tpl';
import { TPropsDefault } from '../../utils/Interfaces';
import Block from '../../utils/Block';
import './container.css';

type TProps = {} & TPropsDefault;

export default class Container extends Block<TProps> {
    render() {
        return this.compile(tpl, {
            children: this.children,
            backArrow: this.props.backArrow,
        });
    }
}
