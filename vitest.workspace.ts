import { defineWorkspace } from 'vitest/config'

export default defineWorkspace([
  // Suite de Unit Tests
  {
    extends: './vitest.config.ts',
    test: {
      name: 'unit',
      setupFiles: ['./vitest.setup.ts', './src/tests/unit/setup.ts'],
      include: [
        'src/**/*.unit.test.ts',
        'src/**/*.unit.test.tsx',
        'src/**/*.spec.ts',
        'src/**/*.spec.tsx'
      ],
      exclude: [
        'src/**/*.usecase.test.ts',
        'src/**/*.integration.test.ts',
        'node_modules',
        'dist',
        '.next',
        '.prisma'
      ],
      environment: 'jsdom'
    }
  },
  
  // Suite de Use Cases Tests
  {
    extends: './vitest.config.ts',
    test: {
      name: 'use-cases',
      setupFiles: ['./vitest.setup.ts', './src/tests/use-cases/setup.ts'],
      include: [
        'src/**/*.usecase.test.ts',
        'src/**/*.use-case.test.ts',
        'src/domain/use-cases/**/*.test.ts',
        'src/application/use-cases/**/*.test.ts'
      ],
      exclude: [
        'src/**/*.unit.test.ts',
        'src/**/*.integration.test.ts',
        'node_modules',
        'dist',
        '.next',
        '.prisma'
      ],
      environment: 'node', // use-cases generalmente no necesitan jsdom
      // Configuración específica para use-cases si es necesario
      pool: 'forks',
      poolOptions: {
        forks: {
          singleFork: false,
        },
      },
    }
  },

  // Suite de API Tests
  {
    extends: './vitest.config.ts',
    test: {
      name: 'api',
      include: [
        'src/**/*.api.test.ts',
        'src/pages/api/**/*.test.ts',
        'src/app/api/**/*.test.ts',
        'src/app/**/route.test.ts'
      ],
      exclude: [
        'src/**/*.unit.test.ts',
        'src/**/*.usecase.test.ts',
        'src/**/*.integration.test.ts',
        'node_modules',
        'dist',
        '.next',
        '.prisma'
      ],
      environment: 'node',
      pool: 'forks',
      poolOptions: {
        forks: {
          singleFork: true,
        },
      },
      testTimeout: 10000,
      setupFiles: ['./src/tests/api/setup.ts'],
    }
  }
]);