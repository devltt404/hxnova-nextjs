import { vi } from 'vitest';

vi.mock('next/navigation', () => ({
  useRouter: () => ({
    push: vi.fn(),
    replace: vi.fn(),
    back: vi.fn(),
    forward: vi.fn(),
    prefetch: vi.fn(),
    pathname: '/mocked-path',
    query: {},
  }),
}));

vi.mock('@microsoft/applicationinsights-react-js', () => ({
  ReactPlugin: vi.fn(),
}));
vi.mock('@microsoft/applicationinsights-web', () => ({
  ApplicationInsights: vi.fn().mockImplementation(() => ({
    loadAppInsights: vi.fn(),
    trackException: vi.fn(),
  })),
}));

HTMLCanvasElement.prototype.getContext = () => null;
window.matchMedia = (query) => ({
  matches: false,
  media: query,
  onchange: null,
  addListener: vi.fn(),
  removeListener: vi.fn(),
  addEventListener: vi.fn(),
  removeEventListener: vi.fn(),
  dispatchEvent: vi.fn(),
});
export {};
