import { Global } from "@emotion/react"

export const Fonts = () => (
  <Global
    styles={`
      @font-face {
        font-family: 'Manrope';
        src: url('fonts/Manrope-Regular.ttf') format('truetype');
      }

      @font-face {
        font-family: 'EB Garamond Bold';
        src: url('fonts/EBGaramond-Bold.ttf') format('truetype');
      }
      `}
  />
)