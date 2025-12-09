import { useTheme } from '../../context/theme-context';
import { Button } from '../button/button';

export const ThemeSwitcher = () => {
  const { toggleTheme } = useTheme();

  return (
    <Button onClick={toggleTheme} variant="secondary">
      Switch Theme
    </Button>
  );
};
