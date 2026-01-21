import '@testing-library/jest-dom/vitest';
import userEvent from '@testing-library/user-event';
import { cleanup } from '@testing-library/react';
import { afterEach } from 'vitest';

export const user = userEvent.setup();

afterEach(() => {
  cleanup();
});

export const pushMock = vi.fn();
vi.mock('next/navigation', () => ({
  useRouter() {
    return {
      push: pushMock,
    };
  },
}));

vi.mock('next/headers', () => ({
  async cookies() {
    return {
      set: vi.fn(),
    };
  },
}));
