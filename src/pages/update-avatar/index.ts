import Modal from '../../components/modal';
import Button from '../../components/button';
import EditAvatar from '../../components/edit-avatar';

const submit = new Button({ title: 'Поменять' });

const UpdateAvatar = new Modal({
    children: new EditAvatar({
        button: submit,
    }),
});

export default UpdateAvatar;
