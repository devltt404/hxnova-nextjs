/// <reference types="vitest" />
import '@testing-library/jest-dom/vitest';
import { expect, afterEach } from 'vitest';
import { cleanup } from '@testing-library/react';
import * as matchers from '@testing-library/jest-dom/matchers';
import './globalMocks';

expect.extend(matchers);

afterEach(() => {
  cleanup();
});
