import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Html lang='en-US'></Html>
        <Head>
          <link
            href='https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;600;700&display=swap'
            rel='stylesheet'
          />
          <meta
            name='viewport'
            content='width=device-width, initial-scale=1.0'
          ></meta>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
