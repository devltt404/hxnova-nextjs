'use client';

import { Icon } from '@hxnova/icons';
import { NavigationTop } from '@hxnova/react-components/NavigationTop';
import { Tabs } from '@hxnova/react-components/Tabs';
import { Chip } from '@hxnova/react-components/Chip';
import { Card } from '@hxnova/react-components/Card';
import { IconButton } from '@hxnova/react-components/IconButton';
import { Avatar } from '@hxnova/react-components/Avatar';
import { Checkbox } from '@hxnova/react-components/Checkbox';
import { Tag } from '@hxnova/react-components/Tag';
import { Button } from '@hxnova/react-components/Button';
import { styles } from './page.styles';
import { Typography } from '@hxnova/react-components';

const Home = () => {
  return (
    <div>
      <NavigationTop
        sx={styles.navigationTop}
        onSearchChange={(val) => console.log(`Searching: ${val}`)}
        pageTitle={'Dashboard'}
        primaryActions={[
          {
            children: 'Browse',
            variant: 'outlined',
            startIcon: <Icon family="material" name="folder" />,
            onClick: () => console.log('primary action clicked'),
          },
          {
            children: 'New project',
            startIcon: <Icon family="material" name="add" />,
            onClick: () => console.log('other action clicked'),
          },
        ]}
        divider={false}
      />
      <div sx={{ paddingBlock: '16px' }}>
        <Tabs.Root defaultValue={1}>
          <Tabs.List>
            <Tabs.Tab value={1}>Projects</Tabs.Tab>
            <Tabs.Tab value={2}>Teams</Tabs.Tab>
            <Tabs.Indicator />
          </Tabs.List>
          <Tabs.Panel value={1} style={{ paddingTop: 16 }}>
            <div sx={styles.chips}>
              <Chip label={'All(9)'} startIcon={<Icon family="material" name="check" />} onClick={() => {}} selected />
              <Chip label={'Recently viewed'} startIcon={<Icon family="material" name="check" />} onClick={() => {}} />
              <Chip label={'Favourites'} startIcon={<Icon family="material" name="check" />} onClick={() => {}} />
            </div>
            <div sx={styles.cardContainer}>
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item) => (
                <Card.Root key={item}>
                  <Card.Header
                    avatar={<Avatar color={'error'}>AA</Avatar>}
                    action={
                      <div style={{ display: 'flex', gap: '4px' }}>
                        <IconButton variant="standard" color="neutral" aria-label="settings">
                          <Icon family="material" name="more_vert" />
                        </IconButton>
                        <Checkbox />
                      </div>
                    }
                    heading={'Heading'}
                    subheading={'Subheading'}
                  />
                  <Card.Media
                    component="img"
                    image={
                      'https://cdn.sanity.io/images/eqlh3dcx/dev/c2ab4812a5485ba4a15aa8f4517b94edb5728c1d-1142x643.png'
                    }
                    style={{ height: '156px' }}
                  />
                  <Card.Content
                    startDecorator={
                      <div style={{ display: 'flex', gap: '8px' }}>
                        <Tag label="Tag" variant="success" intensity="subtle" />
                        <Tag label="Tag" variant="error" intensity="subtle" />
                        <Tag label="Tag" variant="info" intensity="subtle" />
                      </div>
                    }
                    title={'Title'}
                    subtitle={'Subtitle'}
                    supportingText={'Supporting text'}
                    action={
                      <IconButton variant="standard" color="neutral" aria-label="settings">
                        <Icon family="material" name="more_vert" />
                      </IconButton>
                    }
                  />
                  <Card.Actions>
                    <Button variant="text">Button</Button>
                    <Button>Button</Button>
                  </Card.Actions>
                </Card.Root>
              ))}
            </div>
          </Tabs.Panel>
          <Tabs.Panel value={2} style={{ padding: 16 }}>
            <Typography>Tab 2 Content</Typography>
          </Tabs.Panel>
        </Tabs.Root>
      </div>
    </div>
  );
};

export default Home;
