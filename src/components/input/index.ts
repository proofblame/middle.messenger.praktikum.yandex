import { TPropsDefault, IFormInput } from '../../utils/Interfaces';
import Block from '../../utils/Block';
import { tpl } from './input.tpl';

import './input.css';

export default class Input extends Block<IFormInput & TPropsDefault> {
    render() {
        return this.compile(tpl, {
            id: this.props.id,
            name: this.props.name,
            type: this.props.type,
            required: this.props.required,
        });
    }
}
