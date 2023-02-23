import Modal from '../../components/modal';
import Button from '../../components/button';
import EditAvatar from '../../components/edit-avatar';
// @ts-ignore
const submit = new Button({ title: 'Поменять', type: 'button' });

const UpdateAvatar = new Modal({
    children: new EditAvatar({
        button: submit,
    }),
});

export default UpdateAvatar;
