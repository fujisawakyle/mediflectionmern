import { injectGlobal } from 'styled-components';

injectGlobal`
    @import url('https://fonts.googleapis.com/css?family=Bungee+Hairline');

    body {
        background: linear-gradient(to left top, #1687c0, #040711) fixed;
        color: white;
        @include flex-box($jc: center, $ai: center);
        font-family: 'Bungee Hairline', cursive;
        
    }
`;
