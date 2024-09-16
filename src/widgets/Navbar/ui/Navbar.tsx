import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import cls from './Navbar.module.scss';

interface INavbarProps {
	className?: string;
}

export const Navbar = ({ className }: INavbarProps) => {
	return (
		<div className={classNames(cls.Navbar)}>
			<div className={cls.links}>
				<AppLink to={'/'} className={cls.mainLink}> Главная</AppLink>
				<AppLink to={'/about'}>О сайте</AppLink>
			</div>
		</div>
	)
}

