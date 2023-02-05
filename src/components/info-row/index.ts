import { tpl } from './info-row.tpl';
import { TPropsDefault } from '../../utils/Interfaces';
import Block from '../../utils/Block';
import './info-row.css';

type TProps = {
    info?: string;
    item: string;
    id: string;
    disabled?: string;
    className?: string;
    required?: boolean;
    type: string;
} & TPropsDefault;

export default class InfoRow extends Block<TProps> {
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
