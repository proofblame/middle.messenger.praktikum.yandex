import { tpl } from './error-page.tpl';
import './error-page.css';
import Block from '../../utils/Block';
import { TPropsDefault, IErrorPageBlock } from '../../utils/Interfaces';

export default class ErrorPage extends Block<IErrorPageBlock & TPropsDefault> {
    render() {
        return this.compile(tpl, {
            number: this.props.number,
            message: this.props.message,
            routePath: this.props.routePath,
        });
    }
}
