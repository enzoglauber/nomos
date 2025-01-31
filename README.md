# 🚀 Frontend Challenge

Develop the screens on the side following the best software development practices. We will evaluate how you work on building components aiming for reuse and performance, extracting the most out of React.

# 🧠 Context

- [x] Deputies catalog with pagination
- [x] Filtering deputies by name, party, and state
- [x] Number of deputies per page
- [x] Detailed deputy page

## 🤖 Running the application

- Application with [Vite](https://vitejs.dev/):
```ssh
npm install
```
```bash
npm run dev
```
<img src="./public/git/deputies.png" height="420px" alt="Deputies page prototype" /><img src="./public/git/deputy.png" height="420px" alt="Deputy detail page prototype"/>

- Test with [Vitest](https://github.com/vitest-dev/vitest):
```bash
npm run test
```
<img src="./public/git/vitest.png" height="420px" alt="Vitest UI screen print" />

- Coverage with [Vitest](https://github.com/vitest-dev/vitest):
```bash
npm run coverage
```
<img src="./public/git/coverage.png" height="460px" alt="Vitest Coverage v8 screen print" />

- [Storybook](https://storybook.js.org/):
```bash
$env:NODE_OPTIONS="--openssl-legacy-provider"
```
you need to run the bash above if you are using node version > 19 in PowerShell

```bash
npm run storybook
```
<img src="./public/git/storybook.png" height="460px" alt="Storybook screen print" />

- e2e with [Cypress](https://www.cypress.io/):
```bash
npm run cypress
```
<img src="./public/git/cypress.png" height="460px" alt="Cypress screen print" />

## 📋 Instructions

1. Code must be in Typescript
2. Unit testing (Jest) and E2E testing (Cypress)
3. Use use-context-selector to handle properties
4. Use Storybook to document components
5. Use ESlint for static code analysis
6. Use TanStackQuery for API calls
7. Follow the style guide below prioritizing theme creation in MUI
8. Follow the [Figma](https://www.figma.com/file/2niNjUpbG4I522HzeyZsnA/Teste-Nomos?node-id=1-2&t=Ss5wEaKV9ID942H2-0) prototype

## 📰 API

- https://dadosabertos.camara.leg.br/swagger/api.html
- Deputies listing --> /deputados
- Deputy data --> /deputados/:id

## 📖 References

- https://blog.openreplay.com/react-architecture-patterns-for-your-projects
- https://andela.com/insights/structuring-your-react-application-atomic-design-principles/
- https://www.npmjs.com/package/use-context-selector
- https://tanstack.com/query/v4/docs/react/overview
- https://mui.com/material-ui/customization/theming/

---
Made with ❤️ by [Enzo Glauber](https://www.linkedin.com/in/enzo-glauber/)
