import { Theme, useTheme } from 'app/providers/ThemeProvider';
import DarkIcon from 'shared/assets/icons/theme-dark1.svg';
import LightIcon from 'shared/assets/icons/theme-light1.svg';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ThemeSwitcher.module.scss';
import { Button, ThemeButton } from 'shared/ui/Button/Button';

interface IThemeSwitcherProps {
	className?: string;
}

export const ThemeSwitcher = ({ className }: IThemeSwitcherProps) => {
	const { theme, toggleTheme } = useTheme();

	return (
		<div className={classNames(cls.ThemeSwitcher)}>
			<Button
				theme={ThemeButton.CLEAR}
				className={classNames(cls.ThemeSwitcher, {}, [className])}
				onClick={toggleTheme}
			>
				{theme === Theme.DARK ? <DarkIcon /> : <LightIcon />}
			</Button>
		</div>
	)
}