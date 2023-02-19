import { tpl } from './info-row.tpl';
import { TPropsDefault, IInfoRow } from '../../utils/Interfaces';
import Block from '../../utils/Block';
import './info-row.css';

export default class InfoRow extends Block<IInfoRow & TPropsDefault> {
    render() {
        return this.compile(tpl, {
            info: this.props.info,
            item: this.props.item,
            name: this.props.name,
            disabled: this.props.disabled,
            required: this.props.required,
            className: this.props.className,
            type: this.props.type,
        });
    }
}
