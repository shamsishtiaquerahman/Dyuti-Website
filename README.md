# DYUTI Group Website — Production-Oriented Frontend

A React + TypeScript + Vite + Tailwind frontend for **DYUTI Group**, refactored toward a more production-grade architecture.

## Included

- route-config-driven router
- page sections instead of oversized page files
- `entities/` layer for packages, offices, FAQs, and document rules
- content validation with Zod
- API-ready `shared/api/` layer
- strict TypeScript
- ESLint + Prettier
- Vitest + Testing Library
- Vercel SPA rewrite
- English / Bengali / Arabic support
- dark / light mode
- updated Qatar office address:
  - **Level 22, Tornado Tower, West Bay, Doha, Qatar**

## Scripts

```bash
npm install
npm run dev
npm run build
npm run test
npm run lint
npm run typecheck
```


## Security hardening added

- Vercel security headers
- Content Security Policy
- validated environment configuration with Zod
- stronger API client with timeout and response validation
- React error boundary

### Environment setup

Copy `.env.example` into your local `.env` and set the values before production deploy.
- Fixed router mounting so the layout header/footer links load correctly in development and production.
- ErrorBoundary now shows the real runtime error message in local development so crashes can be debugged quickly.
