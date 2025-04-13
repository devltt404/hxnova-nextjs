import { expect, test, describe } from 'vitest';
import { render } from '@testing-library/react';
import Sidebar from './index';

describe('Sidebar', () => {
  test('renders Sidebar component', () => {
    const comps = render(<Sidebar open={true} onClose={() => {}} onToggle={() => {}} />);
    expect(comps).toBeTruthy();
  });
});
