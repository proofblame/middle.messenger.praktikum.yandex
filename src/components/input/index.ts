import { TPropsDefault, IFormInput } from '../../utils/Interfaces';
import Block from '../../utils/Block';
import { tpl } from './input.tpl';

import './input.css';

export default class Input extends Block<IFormInput & TPropsDefault> {
    render() {
        return this.compile(tpl, {
            id: this.props.id,
            title: this.props.title,
            type: this.props.type,
            required: this.props.required,
        });
    }
}
