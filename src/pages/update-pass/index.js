import tpl from "./update-pass.hbs";
import "./update-pass.css";
import InfoRow from "../../components/info-row";
import Container from "../../components/container";

const profileData = [
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

export default (props) =>
  Container({ children: tpl({ profileData, ...props }) });
