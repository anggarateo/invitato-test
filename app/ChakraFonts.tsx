import { Global } from '@emotion/react'

const Fonts = () => (
  <Global
    styles={`
      @font-face {
        font-family: 'Butler';
        font-display: swap;
        src: url('./fonts/Butler_Regular.otf') format('otf');
      }
      
      @font-face {
        font-family: 'Newsreader Display';
        font-display: swap;
        src: url('./fonts/NewsreaderDisplay-Regular.ttf') format('ttf');
      }

      @font-face {
        font-family: 'Newsreader Text';
        font-display: swap;
        src: url('./fonts/NewsreaderText-Regular.ttf') format('ttf');
      }
      `}
  />
)

export default Fonts
