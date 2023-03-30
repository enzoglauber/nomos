> npx b init --builder @storybook/builder-vite --use-npm 

If you hit an ERR_OSSL_EVP_UNSUPPORTED error in your application with Node.js 17, it’s likely that your application or a module you’re using is attempting to use an algorithm or key size which is no longer allowed by default with OpenSSL 3.0. A command-line option, --openssl-legacy-provider, has been added to revert to the legacy provider as a temporary workaround for these tightened restrictions.

> $env:NODE_OPTIONS="--openssl-legacy-provider"

//  Storybook addons to mock http requests (https://storybook.js.org/addons/msw-storybook-addon)
> npm i msw msw-storybook-addon -D
> npm i storybook-addon-react-router-v6 --save-dev


// testing
> npm i @testing-library/jest-dom @testing-library/react jsdom -D
> npm i -D @vitest/ui
> npm install --save-dev nock

// e2e
npm install cypress -D
CYPRESS_INSTALL_BINARY=~/Downloads/cypress.zip npm install cypress -D
or 
cnd in package.json file
"cypress": "https://cdn.cypress.io/beta/npm/10.0.0/darwin-x64/zachw/add-dev-server-deps-8a9ad6b2a49d468787b38989bd07fa11ef77b336/cypress.tgz",