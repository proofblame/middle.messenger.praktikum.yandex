import tpl from "./register.hbs";
import Input from "../../components/input";
import Form from "../../components/form";
import Container from "../../components/container";

const inputs = [
  Input({ name: "email", title: "Почта", type: "text"}),
  Input({ name: "login", title: "Логин", type: "text"}),
  Input({ name: "first_name", title: "Имя", type: "text"}),
  Input({ name: "second_name", title: "Фамилия", type: "text"}),
  Input({ name: "phone", title: "Телефон", type: "tel"}),
  Input({ name: "password", title: "Пароль", type: "password"}),
  Input({ name: "confirm_password", title: "Пароль (еще раз)", type: "password"}),
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
