import { AboutPage } from 'pages/AboutPage'
import { MainPage } from 'pages/MainPage'
import { RouteProps } from 'react-router-dom'

export enum AppRoutes {
	MAIN = 'main',
	ABOUT = 'about'
}

export const AppPath: Record<AppRoutes, string> = {
	[AppRoutes.MAIN]: '/',
	[AppRoutes.ABOUT]: '/about'
}

export const RouteConfig: Record<AppRoutes, RouteProps> = {
	[AppRoutes.MAIN]: {
		path: AppPath.main,
		element: <MainPage />
	},
	[AppRoutes.ABOUT]: {
		path: AppPath.about,
		element: <AboutPage />
	}
}