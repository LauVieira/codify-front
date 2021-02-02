import { createGlobalStyle } from 'styled-components';

import main from './main';
import reset from './reset';
import root from './root';

export default createGlobalStyle`
    ${reset}
    ${root}  
    ${main}
`;
