import tpl from "./register.hbs";
import Input from "../../components/input";
import Form from "../../components/form";
import Container from "../../components/container";

const inputs = [
  Input({ id: "email", name: "Почта", type: "text" }),
  Input({ id: "login", name: "Логин", type: "text" }),
  Input({ id: "name", name: "Имя", type: "text" }),
  Input({ id: "lastname", name: "Фамилия", type: "text" }),
  Input({ id: "phone", name: "Телефон", type: "tel" }),
  Input({ id: "password", name: "Пароль", type: "password" }),
  Input({ id: "confirm-password", name: "Пароль (еще раз)", type: "password" }),
];

const form = Form({
  inputs,
  id: "register",
  formTitle: "Регистрация",
  buttonName: "Зарегистрироваться",
  routePath: "/signin",
  linkName: "Войти",
});

export default (props) => Container({ children: tpl({ form, ...props }) });
