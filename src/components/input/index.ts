import { TPropsDefault } from '../../utils/Interfaces';
import Block from '../../utils/Block';
import { tpl } from './input.tpl';

import './input.css';

type TProps = {
    name: string;
    title: string;
    type: string;
} & TPropsDefault;

export default class Input extends Block<TProps> {
    render() {
        return this.compile(tpl, {
            name: this.props.name,
            title: this.props.title,
            type: this.props.type,
        });
    }
}
