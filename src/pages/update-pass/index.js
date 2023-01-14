import tpl from "../../templates/account/account.hbs";
import InfoRow from "../../components/info-row";
import Container from "../../components/container";
import Button from "../../components/button";

const rows = [
  InfoRow({
    item: "Старый пароль",
    info: ".........",
    id: "oldPassword",
  }),
  InfoRow({ item: "Новый пароль", info: "............", id: "newPassword" }),
  InfoRow({
    item: "Повторите новый пароль",
    info: "............",
    id: "confirmNewPassword",
  }),
];

const button = Button({ title: "Сохранить" });

export default (props) =>
  Container({ children: tpl({ rows, button, ...props }) });
