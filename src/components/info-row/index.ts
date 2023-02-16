import { tpl } from './info-row.tpl';
import { TPropsDefault, IInfoBlock } from '../../utils/Interfaces';
import Block from '../../utils/Block';
import './info-row.css';

export default class InfoRow extends Block<IInfoBlock & TPropsDefault> {
    render() {
        return this.compile(tpl, {
            info: this.props.info,
            item: this.props.item,
            id: this.props.id,
            disabled: this.props.disabled,
            required: this.props.required,
            className: this.props.className,
            type: this.props.type,
        });
    }
}
