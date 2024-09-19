import { useTheme } from 'app/providers/ThemeProvider/lib/useTheme';
import { Link } from 'react-router-dom';
import { classNames } from 'shared/lib/classNames/classNames';
import './styles/index.scss';
import { Navbar } from 'widgets/Navbar';
import { AppRouter } from './providers/router/AppRouter';

const App = () => {
	const { theme } = useTheme()
	return (
		<div className={classNames('app', {}, [theme])}>
			<Navbar/>
			<AppRouter />
		</div>
	)
}
export default App;
