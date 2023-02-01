import { tpl } from './info-row.tpl';
import { TPropsDefault } from '../../utils/Interfaces';
import Block from '../../utils/Block';
import './info-row.css';

type TProps = {
    info: string;
    item: string;
    name: string;
    disabled: boolean;
    className: string;
} & TPropsDefault;

export default class InfoRow extends Block<TProps> {
    render() {
        return this.compile(tpl, {
            info: this.props.info,
            item: this.props.item,
            name: this.props.name,
            disabled: this.props.disabled,
            className: this.props.className,
        });
    }
}
