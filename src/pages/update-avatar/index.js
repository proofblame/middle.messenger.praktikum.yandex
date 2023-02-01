import tpl from './update-avatar.hbs';
import './update-avatar.css';
import Modal from '../../components/modal';
import Button from '../../components/button';

const submit = Button({ title: 'Поменять' });

export default (props) =>
    Modal({ children: tpl({ button: submit, ...props }) });
