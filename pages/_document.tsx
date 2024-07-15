import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta name="title" content="Wexam Online Sohbet"></meta>
        <meta name="description" content="Hey! Wexam Online Sohbet yerinde sohbet etmek ister misin ? Burada aradığın herşey var!"></meta>
        <link rel="icon" href="https://i.imgur.com/2NidQby.jpeg" type="image/icon type" />
      </Head>
      <body>
        <Main />
        <NextScript />
        <Script id="change-theme" strategy="beforeInteractive">
          {`(function () {
            try {
              var d = document.documentElement;
              var e = localStorage.getItem("theme");
               e= e.replace(/"/g, '');
              if ((!e && true)) {
                var t = '(prefers-color-scheme: dark)';
                var m = window.matchMedia(t);
                if (m.media !== t || m.matches) {
                  d.setAttribute("data-theme", "dark");
                } else {
                  d.setAttribute("data-theme", "dark");
                }
              } else if (e) {
                d.setAttribute("data-theme", e);
              }
            } catch (e) {}
          })()`}
        </Script>
      </body>
    </Html>
  );
}
