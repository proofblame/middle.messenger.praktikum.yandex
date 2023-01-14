import tpl from "../../templates/account/account.hbs";
import InfoRow from "../../components/info-row";
import Container from "../../components/container";
import Button from "../../components/button";

const rows = [
  InfoRow({ item: "Почта", info: "pochta@yandex.ru", name: "email" }),
  InfoRow({ item: "Логин", info: "ivanivanov", name: "login" }),
  InfoRow({ item: "Имя", info: "Иван", name: "first_name" }),
  InfoRow({ item: "Фамилия", info: "Иванов", name: "second_name" }),
  InfoRow({ item: "Имя в чате", info: "Иван", name: "display_name" }),
  InfoRow({ item: "Телефон", info: "+7 (777) 777 77 77", name: "phone" }),
];

const button = Button({ title: "Сохранить" });

export default (props) =>
  Container({ children: tpl({ rows, button, ...props }) });
