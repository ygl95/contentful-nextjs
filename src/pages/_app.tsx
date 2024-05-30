import React from 'react';
import Head from 'next/head';

import 'styles/index.css';
import { PreviewBanner } from 'components/preview-banner';
import { TopNavigation } from 'components/top-navigation';
import App, { AppContext } from 'next/app';
import { getLocale, LocaleContext, UnknownLocale } from 'lib/translations';
import 'flowbite';

function RecipesApp({ Component, pageProps }) {
  const { locale, ...otherPageProps } = pageProps;

  return (
    <LocaleContext.Provider value={locale}>
      <div>
        <Head>
          <link rel="shortcut icon" href="/favicon/favicon.png" type="image/png" />
          <link rel="apple-touch-icon" href="/favicon/apple-icon-57x57.png" type="image/png" />
          <link rel="apple-touch-icon" href="/favicon/apple-icon-72x72.png" type="image/png" />
          <link rel="apple-touch-icon" href="/favicon/apple-icon-114x114.png" type="image/png" />
          <meta
            name="description"
            content={`Demo using Next.js and Contentful Compose.`}
            key="description"
          />
        </Head>
        <PreviewBanner />
        <div>
          <TopNavigation />
          <Component {...otherPageProps} />
        </div>
      </div>
    </LocaleContext.Provider>
  );
}

export default RecipesApp;
