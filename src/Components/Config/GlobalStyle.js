import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Museo Sans Cyrl 100';
    src: url('/fonts/Museo Sans Cyrl/hinted-MuseoSansCyrl-100.eot');
    src: url('/fonts/Museo Sans Cyrl/hinted-MuseoSansCyrl-100.eot?#iefix') format('embedded-opentype'),
        url('/fonts/Museo Sans Cyrl/hinted-MuseoSansCyrl-100.woff2') format('woff2'),
        url('/fonts/Museo Sans Cyrl/hinted-MuseoSansCyrl-100.woff') format('woff'),
        url('/fonts/Museo Sans Cyrl/hinted-MuseoSansCyrl-100.ttf') format('truetype');
    font-weight: 100;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: 'Museo Sans Cyrl 300';
    src: url('/fonts/Museo Sans Cyrl/hinted-MuseoSansCyrl-300.eot');
    src: url('/fonts/Museo Sans Cyrl/hinted-MuseoSansCyrl-300.eot?#iefix') format('embedded-opentype'),
        url('/fonts/Museo Sans Cyrl/hinted-MuseoSansCyrl-300.woff2') format('woff2'),
        url('/fonts/Museo Sans Cyrl/hinted-MuseoSansCyrl-300.woff') format('woff'),
        url('/fonts/Museo Sans Cyrl/hinted-MuseoSansCyrl-300.ttf') format('truetype');
    font-weight: normal;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: 'Museo Sans Cyrl 500';
    src: url('/fonts/Museo Sans Cyrl/hinted-MuseoSansCyrl-500.eot');
    src: url('/fonts/Museo Sans Cyrl/hinted-MuseoSansCyrl-500.eot?#iefix') format('embedded-opentype'),
    url('/fonts/Museo Sans Cyrl/hinted-MuseoSansCyrl-500.woff2') format('woff2'),
    url('/fonts/Museo Sans Cyrl/hinted-MuseoSansCyrl-500.woff') format('woff'),
    url('/fonts/Museo Sans Cyrl/hinted-MuseoSansCyrl-500.ttf') format('truetype');
    font-weight: 500;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: 'Museo Sans Cyrl 700';
    src: url('/fonts/Museo Sans Cyrl/hinted-MuseoSansCyrl-700.eot');
    src: url('/fonts/Museo Sans Cyrl/hinted-MuseoSansCyrl-700.eot?#iefix') format('embedded-opentype'),
    url('/fonts/Museo Sans Cyrl/hinted-MuseoSansCyrl-700.woff2') format('woff2'),
    url('/fonts/Museo Sans Cyrl/hinted-MuseoSansCyrl-700.woff') format('woff'),
    url('/fonts/Museo Sans Cyrl/hinted-MuseoSansCyrl-700.ttf') format('truetype');
    font-weight: bold;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: 'Museo Sans Cyrl 900';
    src: url('/fonts/Museo Sans Cyrl/hinted-MuseoSansCyrl-900.eot');
    src: url('/fonts/Museo Sans Cyrl/hinted-MuseoSansCyrl-900.eot?#iefix') format('embedded-opentype'),
    url('/fonts/Museo Sans Cyrl/hinted-MuseoSansCyrl-900.woff2') format('woff2'),
    url('/fonts/Museo Sans Cyrl/hinted-MuseoSansCyrl-900.woff') format('woff'),
    url('/fonts/Museo Sans Cyrl/hinted-MuseoSansCyrl-900.ttf') format('truetype');
    font-weight: 900;
    font-style: normal;
    font-display: swap;
  }
`;
