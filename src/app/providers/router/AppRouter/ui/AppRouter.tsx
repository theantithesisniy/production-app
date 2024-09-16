import { Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import { RouteConfig } from 'shared/config/routeConfig/RouteConfig'

const AppRouter = () => {
	return (
		<Suspense fallback={<div>Loading...</div>}>
			<Routes>
				{Object.values(RouteConfig).map(({ element, path }) => (
					<Route
						key={path}
						element={element}
						path={path}
					/>
				))}
			</Routes>
		</Suspense>
	)
}

export default AppRouter
