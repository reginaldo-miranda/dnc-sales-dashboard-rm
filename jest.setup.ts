/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import '@testing-library/jest-dom'
import 'jest-styled-components'
import '@testing-library/jest-dom';
import { TextEncoder, TextDecoder } from 'util';

(global as any).TextEncoder = TextEncoder;
(global as any).TextDecoder = TextDecoder;
