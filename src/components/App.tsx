'use client';
import * as React from 'react';
import { useColorScheme } from './ColorScheme/ColorSchemeProvider';
import ColorSchemeToggleButton from './ColorScheme/ColorSchemeToggleButton';

function App({ children }: React.PropsWithChildren) {
  const { colorScheme } = useColorScheme();
  return (
    <body className={`${colorScheme}`}>
      {children}
      <ColorSchemeToggleButton />
    </body>
  );
}

export default App;
