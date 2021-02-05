import { createGlobalStyle } from 'styled-components';

import Main from './Main';
import Reset from './Reset';
import Root from './Root';

export default createGlobalStyle`
    ${Reset}
    ${Root}  
    ${Main}
`;
