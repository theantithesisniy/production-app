import { Suspense } from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import { AboutPageAsync } from './components/pages/AboutPage/AboutPage.async';
import { MainPageAsync } from './components/pages/MainPage/MailPage.async';
import './styles/index.scss';
import { useTheme } from './theme/useTheme';

const App = () => {
	const { theme, toggleTheme } = useTheme()

	return (
		<div className={`app ${theme}`}>
			<button onClick={toggleTheme}>Сменить тему</button>
			<Link to={'/'}> Главная</Link>
			<Link to={'/about'}>О сайте</Link>
			<Suspense fallback={<div>Loading...</div>}>
				<Routes>
					<Route path={'/about'} element={<AboutPageAsync />} />
					<Route path={'/'} element={<MainPageAsync />} />
				</Routes>
			</Suspense>
		</div>
	)
}


export default App