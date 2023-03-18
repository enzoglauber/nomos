> npx b init --builder @storybook/builder-vite --use-npm 

If you hit an ERR_OSSL_EVP_UNSUPPORTED error in your application with Node.js 17, it’s likely that your application or a module you’re using is attempting to use an algorithm or key size which is no longer allowed by default with OpenSSL 3.0. A command-line option, --openssl-legacy-provider, has been added to revert to the legacy provider as a temporary workaround for these tightened restrictions.

> $env:NODE_OPTIONS="--openssl-legacy-provider"

//  Storybook addons to mock http requests (https://storybook.js.org/addons/msw-storybook-addon)
> npm i msw msw-storybook-addon -D
> npm i storybook-addon-react-router-v6 --save-dev

// https://codingwithmanny.medium.com/quick-jest-setup-with-vitejs-react-typescript-82f325e4323f
> npm i jest @types/jest -D
> npm install -D @testing-library/react @testing-library/jest-dom @testing-library/user-event
> npx jest --init
> npm i ts-node -D