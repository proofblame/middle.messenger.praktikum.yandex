import tpl from './error.hbs'
import './error.css'
import Container from '../../components/container';

export default props => Container({children: tpl(props)});
