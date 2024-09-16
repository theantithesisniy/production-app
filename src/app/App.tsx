import { useTheme } from 'app/providers/ThemeProvider/lib/useTheme';
import { Link } from 'react-router-dom';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppRouter } from './providers/router/AppRouter';
import './styles/index.scss';

const App = () => {
	const { theme, toggleTheme } = useTheme()
	return (
		<div className={classNames('app', {}, [theme])}>
			<button onClick={toggleTheme}>Сменить тему</button>
			<Link to={'/'}> Главная</Link>
			<Link to={'/about'}>О сайте</Link>
			<AppRouter />
		</div>
	)
}
export default App;
