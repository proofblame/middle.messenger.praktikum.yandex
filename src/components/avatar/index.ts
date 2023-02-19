import { tpl } from './avatar.tpl';
import Block from '../../utils/Block';
import { IAvatar } from '../../utils/Interfaces';

import './avatar.css';

export default class Avatar extends Block<IAvatar> {
    render() {
        return this.compile(tpl, {
            url: this.props.url,
        });
    }
}
