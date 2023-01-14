import tpl from "../../templates/account/account.hbs";
import InfoRow from "../../components/info-row";
import Container from "../../components/container";
import avatar from '../../../static/images/avatar.png'

const rows = [
  InfoRow({
    item: "Почта",
    info: "pochta@yandex.ru",
    disabled: "disabled",
    name: "email",
  }),
  InfoRow({
    item: "Логин",
    info: "ivanivanov",
    disabled: "disabled",
    name: "login",
  }),
  InfoRow({
    item: "Имя",
    info: "Иван",
    disabled: "disabled",
    name: "first_name",
  }),
  InfoRow({
    item: "Фамилия",
    info: "Иванов",
    disabled: "disabled",
    name: "second_name",
  }),
  InfoRow({
    item: "Имя в чате",
    info: "Иван",
    disabled: "disabled",
    name: "display_name",
  }),
  InfoRow({
    item: "Телефон",
    info: "+7 (777) 777 77 77",
    disabled: "disabled",
    name: "phone",
  }),
];

const buttons = [
  InfoRow({ item: "Изменить данные" }),
  InfoRow({ item: "Изменить пароль" }),
  InfoRow({ item: "Выйти", className: "color-red" }),
];

const userName = "Иван";

export default (props) =>
  Container({ children: tpl({ rows, buttons, userName, avatar, ...props }) });
