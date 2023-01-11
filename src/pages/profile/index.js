import tpl from "./profile.hbs";
import './profile.css'
import InfoRow from '../../components/info-row'
import Container from "../../components/container";

const rows = [
  InfoRow({item: 'Почта', info: 'pochta@yandex.ru'}),
  InfoRow({item: 'Логин', info: 'ivanivanov'}),
  InfoRow({item: 'Имя', info: 'Иван'}),
  InfoRow({item: 'Фамилия', info: 'Иванов'}),
  InfoRow({item: 'Имя в чате', info: 'Иван'}),
  InfoRow({item: 'Телефон', info: '+7 (777) 777 77 77'}),
];

const buttons = [
  InfoRow({item: 'Изменить данные'}),
  InfoRow({item: 'Изменить пароль'}),
  InfoRow({item: 'Выйти', className: 'color-red'}),
]

export default (props) => Container({ children: tpl({ rows, buttons, ...props }) });
