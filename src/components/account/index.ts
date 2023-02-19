import { TPropsDefault } from '../../utils/Interfaces';
import { tpl } from './account.tpl';
import Block from '../../utils/Block';

import './account.css';

type TProps = {
    profileData: any;
    avatar?: any;
    button?: any;
} & TPropsDefault;

export default class Account extends Block<TProps> {
    render() {
        return this.compile(tpl, {
            avatar: this.props.avatar,
            profileData: this.props.profileData,
            button: this.props.button,
        });
    }
}
