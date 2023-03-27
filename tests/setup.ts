// // react-testing-library renders your components to document.body,
// // this adds jest-dom's custom assertions
// // workaround: https://github.com/testing-library/jest-dom/issues/427#issuecomment-1110985202
// // eslint-disable-next-line prettier/prettier
// import '@testing-library/jest-dom/extend-expect';

import matchers from '@testing-library/jest-dom/matchers'
import { expect } from 'vitest'

expect.extend(matchers)
