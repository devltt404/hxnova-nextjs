import React from 'react';
import { Drawer } from '@hxnova/react-components/Drawer';
import { IconButton } from '@hxnova/react-components/IconButton';
import { Avatar } from '@hxnova/react-components/Avatar';
import { Divider } from '@hxnova/react-components/Divider';
import { Icon } from '@hxnova/icons';
import { List } from '@hxnova/react-components/List';
import { ListItem } from '@hxnova/react-components/ListItem';
import { ListItemDecorator } from '@hxnova/react-components/ListItemDecorator';
import { ListItemButton } from '@hxnova/react-components/ListItemButton';
import { ListItemContent } from '@hxnova/react-components/ListItemContent';
import NexusCoreIcon from '@nexusui/branding/NexusCore';
import { useRouter } from 'next/navigation';

const leftPanelCloseSvg = (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M16.048 15.5865V8.4135L12.452 12L16.048 15.5865ZM5.30775 20.5C4.80908 20.5 4.38308 20.3234 4.02975 19.9703C3.67658 19.6169 3.5 19.1909 3.5 18.6923V5.30775C3.5 4.80908 3.67658 4.38308 4.02975 4.02975C4.38308 3.67658 4.80908 3.5 5.30775 3.5H18.6923C19.1909 3.5 19.6169 3.67658 19.9703 4.02975C20.3234 4.38308 20.5 4.80908 20.5 5.30775V18.6923C20.5 19.1909 20.3234 19.6169 19.9703 19.9703C19.6169 20.3234 19.1909 20.5 18.6923 20.5H5.30775ZM8 19V5H5.30775C5.23075 5 5.16025 5.03208 5.09625 5.09625C5.03208 5.16025 5 5.23075 5 5.30775V18.6923C5 18.7692 5.03208 18.8398 5.09625 18.9038C5.16025 18.9679 5.23075 19 5.30775 19H8ZM9.5 19H18.6923C18.7692 19 18.8398 18.9679 18.9038 18.9038C18.9679 18.8398 19 18.7692 19 18.6923V5.30775C19 5.23075 18.9679 5.16025 18.9038 5.09625C18.8398 5.03208 18.7692 5 18.6923 5H9.5V19Z"
      fill="currentColor"
    />
  </svg>
);

const rightPanelCloseSvg = (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M12.5 8V16L16.5 12L12.5 8ZM5 21C4.45 21 3.97917 20.8042 3.5875 20.4125C3.19583 20.0208 3 19.55 3 19V5C3 4.45 3.19583 3.97917 3.5875 3.5875C3.97917 3.19583 4.45 3 5 3H19C19.55 3 20.0208 3.19583 20.4125 3.5875C20.8042 3.97917 21 4.45 21 5V19C21 19.55 20.8042 20.0208 20.4125 20.4125C20.0208 20.8042 19.55 21 19 21H5ZM8 19V5H5V19H8ZM10 19H19V5H10V19Z"
      fill="currentColor"
    />
  </svg>
);

interface SidebarProps {
  open: boolean;
  onClose: () => void;
  onToggle: () => void;
}

const Sidebar = ({ open, onClose, onToggle }: SidebarProps) => {
  const [activeItem, setActiveItem] = React.useState('1');
  const handleItemSelect = (itemId: string) => setActiveItem(itemId);
  const router = useRouter();
  return (
    <Drawer.Root
      variant="permanent"
      onClose={onClose}
      expanded={open}
      activeItem={activeItem}
      onItemSelect={handleItemSelect}
    >
      <Drawer.Header
        productLogo={<NexusCoreIcon height={40} width={40} />}
        pageTitle={'Product name'}
        endDecorator={
          <IconButton
            sx={(theme) => ({
              color: theme.vars.palette.onSurfaceVariant,
            })}
            variant={'standard'}
            color={'primary'}
            onClick={onToggle}
          >
            {open ? leftPanelCloseSvg : rightPanelCloseSvg}
          </IconButton>
        }
      />
      <Drawer.Body>
        <Drawer.NavGroup>
          <Drawer.NavItem
            itemId="1"
            label="Label"
            startDecorator={<Icon family="material" name="home" />}
            trailingLabel={'100+'}
            onClick={() => {
              router.push('/');
              setActiveItem('1');
            }}
          />
          <Drawer.NavItem
            itemId="2"
            label="Label"
            startDecorator={<Icon family="material" name="inbox" />}
            trailingBadge={{
              badgeContent: '31',
              color: 'error',
            }}
            onClick={() => {
              router.push('/about');
              setActiveItem('2');
            }}
          />
          <Drawer.NavItem
            itemId="3"
            label="Label"
            startDecorator={<Icon family="material" name="group" />}
            onClick={() => {
              router.push('/contact');
              setActiveItem('3');
            }}
          />
          <Drawer.NavItem itemId="5" label="Label" startDecorator={<Icon family="material" name="outbox" />} />
        </Drawer.NavGroup>
        <Divider />
        <Drawer.NavGroup>
          <Drawer.NavItem itemId="6" label="Label" startDecorator={<Icon family="material" name="star" />} />
          <Drawer.NavItem itemId="7" label="Label" startDecorator={<Icon family="material" name="folder" />} />
        </Drawer.NavGroup>
      </Drawer.Body>
      <Drawer.Footer>
        <Divider />
        <Drawer.NavGroup>
          <Drawer.NavItem
            itemId="8"
            label="Label"
            startDecorator={<Icon family="material" name="folder" />}
            trailingLabel={'100+'}
          />
        </Drawer.NavGroup>
        <List sx={{ height: '72px', justifyContent: 'center' }}>
          <ListItem sx={{ paddingInline: '0.75rem' }}>
            <ListItemButton>
              <ListItemDecorator>
                <Avatar color={'error'}>AA</Avatar>
              </ListItemDecorator>
              {open && (
                <>
                  <ListItemContent primary="John Doe" secondary="Supporting text" />
                  <ListItemDecorator sx={{ fontSize: 24 }}>
                    <Icon family="material" name="keyboard_arrow_right" />
                  </ListItemDecorator>
                </>
              )}
            </ListItemButton>
          </ListItem>
        </List>
      </Drawer.Footer>
    </Drawer.Root>
  );
};

export default Sidebar;
