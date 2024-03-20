import { createBrowserRouter } from 'react-router-dom';
import NotFoundPage from './pages/_404.page';

import DashboardLayout from './_app/common/layouts/DashboardLayout';
import { authRouter } from './pages/auth/auth.router';
import { contentNavLinks } from './pages/content/content.navlinks';
import HomePage from './pages/content/home';
import JoinRequestsPage from './pages/content/join-requests/join-requests.page';
import OrganizationPage from './pages/content/organizations/organization.page';

export const rootRouter = createBrowserRouter([
	{
		path: '/',
		element: <DashboardLayout navlinks={contentNavLinks} />,
		children: [
			{
				path: '/',
				element: <HomePage />,
			},
			{
				path: '/organizations',
				element: <OrganizationPage />,
			},
			{
				path: '/join_requests',
				element: <JoinRequestsPage />,
			},
		],
	},
	{
		path: '/auth',
		children: authRouter,
	},
	{
		path: '*',
		element: <NotFoundPage />,
	},
]);
