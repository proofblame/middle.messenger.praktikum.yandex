import { tpl } from './error-page.tpl';
import './error-page.css';
import Block from '../../utils/Block';
import { TPropsDefault } from '../../utils/Interfaces';

type TProps = {
    number: string | number;
    message: string;
} & TPropsDefault;

export default class ErrorPage extends Block<TProps> {
    render() {
        return this.compile(tpl, {
            number: this.props.number,
            message: this.props.message,
        });
    }
}
