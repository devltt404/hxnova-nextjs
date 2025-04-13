'use client';

import * as React from 'react';
import ColorSchemeToggleButton from '@/components/ColorScheme/ColorSchemeToggleButton';
import Sidebar from '@/components/Sidebar';

export default function Layout(props: { children: React.ReactNode }) {
  const [open, setOpen] = React.useState(false);
  const handleClose = () => setOpen(false);
  const toggleDrawer = () => setOpen(!open);

  return (
    <main
      sx={{
        display: 'flex',
        backgroundColor: 'var(--palette-surface)',
        height: '100%',
        overflow: 'auto',
      }}
    >
      <Sidebar open={open} onClose={handleClose} onToggle={toggleDrawer} />
      <div
        sx={[
          {
            flex: 1,
            paddingInline: '24px',
            transition: 'margin-left 225ms cubic-bezier(0.4, 0, 0.6, 1)',
          },
          open ? { marginLeft: 360 } : { marginLeft: 80 },
        ]}
      >
        {props.children}
      </div>
      <ColorSchemeToggleButton />
    </main>
  );
}
