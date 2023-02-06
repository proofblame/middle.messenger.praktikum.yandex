import { tpl } from './button.tpl';
import { TPropsDefault } from '../../utils/Interfaces';
import Block from '../../utils/Block';

import './button.css';

type TProps = {
    title: string;
    type: string;
} & TPropsDefault;

export default class Button extends Block<TProps> {
    render() {
        return this.compile(tpl, {
            title: this.props.title,
            type: this.props.type,
        });
    }
}
