import { tpl } from './form.tpl';
import { TPropsDefault, ISignForm } from '../../utils/Interfaces';
import Block from '../../utils/Block';
import './form.css';

export default class Form extends Block<ISignForm & TPropsDefault> {
    render() {
        return this.compile(tpl, {
            id: this.props.id,
            formTitle: this.props.formTitle,
            buttonName: this.props.buttonName,
            routePath: this.props.routePath,
            linkName: this.props.linkName,
            inputs: this.props.inputs,
        });
    }
}
