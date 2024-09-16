import { useTheme } from 'app/providers/ThemeProvider/lib/useTheme';
import { Link } from 'react-router-dom';
import { classNames } from 'shared/lib/classNames/classNames';
import './styles/index.scss';
import { Navbar } from 'widgets/Navbar';
import { AppRouter } from './providers/router/AppRouter';

const App = () => {
	const { theme, toggleTheme } = useTheme()
	return (
		<div className={classNames('app', {}, [theme])}>
			<Navbar/>
			<button onClick={toggleTheme}>Сменить тему</button>
			<AppRouter />
		</div>
	)
}
export default App;
