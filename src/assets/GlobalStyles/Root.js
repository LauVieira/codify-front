import { css } from 'styled-components';

export default css`
    :root {
        // Body
        --gradient-blue: linear-gradient(to bottom, #1D3364, #56C7E7, #56C7E7, #1D3364);
        --background-color: ##E5E5E5;

        // Container Yellow Description
        --gradient-yellow: linear-gradient(180deg, #EFDA4F 0%, rgba(239, 218, 79, 0.56) 100%);
        
        // box shadow rest items
        --shadow-strong: 0px 0px 20px rgba(0, 0, 0, 0.15);
        // box shadow default
        --shadow-regular: 0px 4px 4px rgba(0, 0, 0, 0.25);

        // Focus
        --shadow-focus: 0 0 5px rgba(81, 203, 238, 1);
        --border-focus: 1px solid rgba(81, 203, 238, 1);

        // Radius Login / Buttons
        --radius-regular: 10px;
        // Radius default / Cards
        --radius-strong: 20px;
        // Inputs radius
        --radius-thin: 6px;
        // Profile Picture
        --radius-circle: 50%;

        // Fonte Sub-titulo
        --font-orienta: 'Orienta', sans-serif;
        // Fonte default
        --font-roboto: 'Roboto', sans-serif;
        // Fonte Titulo
        --font-zilla: 'Zilla Slab Highlight', cursive;
        
        // Colors
        --color-blue: #46A7D4;
        --color-white: #FFFFFF;
        --color-black: #000000;
        --color-green: #76DF93;
        // Nav Bar and Subtitles
        --color-subtitle: #262626;

        // Color default -> descriptions / login
        --color-default: #777777;

        // Cor Ementa Links
        --color-grey-regular: #656565;

        // Input placeholders
        --color-grey-light: #9F9F9F;
        
        // Ver Mais
        --color-grey-thin: #BBBBBB;
    }
`;