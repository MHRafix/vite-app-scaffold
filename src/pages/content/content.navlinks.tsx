import { AppNavLink } from '@/_app/models/AppNavLink.type';
import { IconExchange, IconTableShare } from '@tabler/icons-react';

export const contentNavLinks: AppNavLink[] = [
	{
		label: 'Organizations',
		icon: <IconTableShare />,
		href: 'organizations',
	},
	{
		label: 'Join Requests',
		icon: <IconExchange />,
		href: 'join_requests',
	},
];
