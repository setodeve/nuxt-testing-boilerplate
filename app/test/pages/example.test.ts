import { describe, it, expect } from 'vitest';
import PageExample from '~/pages/example/index.vue';
import { renderSuspended } from '@nuxt/test-utils/runtime'
import { screen, fireEvent } from '@testing-library/vue'

describe('Example Page Test', () => {
  it('should handle button click', async () => {
    await renderSuspended(PageExample);
    const button = screen.getByRole('button');
    expect(button).toBeDefined();
    await fireEvent.click(button);
  });

  it('should increment count ref on button click', async () => {
    await renderSuspended(PageExample);
    const countDisplay = screen.getByTestId('count');
    expect(countDisplay.textContent).toBe('0');
    const button = screen.getByRole('button');
    await fireEvent.click(button);
    expect(countDisplay.textContent).toBe('1');
  });
});

