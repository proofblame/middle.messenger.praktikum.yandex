import { tpl } from './form.tpl';
import { TPropsDefault } from '../../utils/Interfaces';
import Block from '../../utils/Block';
import './form.css';

type TProps = {
  id: string;
  formTitle: string;
  buttonName: string;
  routePath: string;
  linkName: string;
} & TPropsDefault;

export default class Form extends Block<TProps> {
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
