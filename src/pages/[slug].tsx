/* eslint-disable @typescript-eslint/naming-convention */
import React from 'react';
import ErrorPage from 'next/error';

import { getPage, getPagesOfType } from 'lib/api';
import { isPreviewEnabled } from 'lib/preview';
import { PageHead } from 'components/page-head';
import { PageContentTypes } from 'lib/constants';
import { TypePage_landing } from 'lib/types';
import { BlockRenderer } from 'components/renderer/block-renderer';
import { withLocale } from 'lib/translations';

export const getStaticPaths = async () => {
  const topPagesContentType = PageContentTypes.LandingPage;
  const res = await getPagesOfType({
    preview: false,
    locale: 'en-US',
    pageContentType: topPagesContentType,
  });

  // map data to an array of path objects with params (id)
  const paths = res.map((page) => {
    return {
      params: { slug: page?.fields?.slug.toString() },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const slug = String(context.params?.slug ?? 'home');
  const topPagesContentType = PageContentTypes.LandingPage;

  const [page] = await Promise.all([
    getPage({ slug, preview: false, locale: 'en-US', pageContentType: topPagesContentType }),
  ]);

  return {
    props: { page },
  };
};

type LandingProps = {
  page: TypePage_landing;
};

export default function Landing({ page }: LandingProps) {
  if (!page) {
    return <ErrorPage statusCode={404} />;
  }

  // eslint-disable-next-line no-unsafe-optional-chaining
  const { sections = [] } = page.fields;

  return (
    <div>
      <BlockRenderer block={sections} />
    </div>
  );
}
