import { defineVitestConfig } from '@nuxt/test-utils/config'

export default defineVitestConfig({
  test: {
    environment: 'nuxt',
    include: ['components/**/*.test.ts', 'tests/integration/**/*.test.ts'],
  },
})
