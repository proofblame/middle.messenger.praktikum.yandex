import { TPropsDefault } from '../../utils/Interfaces';
import Block from '../../utils/Block';
import { tpl } from './input.tpl';

import './input.css';

type TProps = {
    id: string;
    title: string;
    type: string;
    required: boolean;
} & TPropsDefault;

export default class Input extends Block<TProps> {
    render() {
        return this.compile(tpl, {
            id: this.props.id,
            title: this.props.title,
            type: this.props.type,
            required: this.props.required,
        });
    }
}
