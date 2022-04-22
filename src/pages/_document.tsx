import NextDocument, { Html, Head, Main, NextScript } from 'next/document'
import { getCssText } from '../../stitches.config'

export default class Document extends NextDocument {
  render() {
    return (
      <Html lang="pt">
        <Head>
          <style
            id="stitches"
            dangerouslySetInnerHTML={{ __html: getCssText() }}
          />
          <style
            dangerouslySetInnerHTML={{
              __html: `
              @font-face {
                font-family: 'Roboto';
                font-weight: 400;
                font-display: swap;
                src: url(/fonts/roboto-v29-latin-regular.woff2) format('woff2'), url(/fonts/roboto-v29-latin-regular.woff) format('woff');
              }
              @font-face {
                font-family: 'Roboto';
                font-weight: 500;
                font-display: swap;
                src: url(/fonts/roboto-v29-latin-500.woff2) format('woff2'), url(/fonts/roboto-v29-latin-500.woff) format('woff');
              }
              @font-face {
                font-family: 'Untitled Sans';
                font-weight: 400;
                font-display: swap;
                src: url(/fonts/UntitledSansWeb-Regular.woff2) format('woff2'), url(/fonts/UntitledSansWeb-Regular.woff) format('woff');
              }
              @font-face {
                font-family: 'Untitled Sans';
                font-weight: 500;
                font-display: swap;
                src: url(/fonts/UntitledSansWeb-Medium.woff2) format('woff2'), url(/fonts/UntitledSansWeb-Medium.woff) format('woff');
              }
              @font-face {
                font-family: 'Söhne Mono';
                font-weight: normal;
                font-style: normal;
                font-display: swap;
                src: url('/fonts/soehne-mono-web-buch.woff2') format('woff2'), url('/fonts/soehne-mono-web-buch.woff') format('woff');
              }
              .c-fHFQzz {
                opacity: 0;
              }
              `
            }}
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
