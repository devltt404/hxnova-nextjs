import { Fab } from '@hxnova/react-components/Fab';
import { useColorScheme } from './ColorSchemeProvider';
import { Icon } from '@hxnova/icons';

function ColorSchemeToggleButton() {
  const { colorScheme, setColorScheme } = useColorScheme();

  const toggleColorScheme = () => {
    setColorScheme(colorScheme === 'dark' ? 'light' : 'dark');
  };

  return (
    <div sx={{ position: 'fixed', bottom: 54, right: 54 }}>
      <Fab
        onClick={toggleColorScheme}
        startIcon={<Icon family="material" name={colorScheme === 'light' ? 'dark_mode' : 'light_mode'} />}
      />
    </div>
  );
}

export default ColorSchemeToggleButton;
