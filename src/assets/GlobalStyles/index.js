import { createGlobalStyle } from 'styled-components';

<<<<<<< HEAD
import main from './main';
import reset from './reset';
import root from './root';

export default createGlobalStyle`
    ${reset}
    ${root}  
    ${main}
=======
import Main from './Main';
import Reset from './Reset';
import Root from './Root';

export default createGlobalStyle`
    ${Reset}
    ${Root}  
    ${Main}
>>>>>>> main
`;
