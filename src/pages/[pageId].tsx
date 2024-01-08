import { ExtendedRecordMap } from 'notion-types';
import { getAllPagesInSpace } from 'notion-utils';
import { defaultMapPageUrl } from 'react-notion-x';
import { GetStaticProps } from 'next';
import { redirect } from 'next/navigation';

import * as notion from '../lib/notion';
import NotionPage from '../components/NotionPage';
import {
  isDev,
  previewImagesEnabled,
  rootDomain,
  rootNotionPageId,
  rootNotionSpaceId,
} from '../lib/config';
import { routerData } from '@/components/router/route';

export const getStaticProps = (async (context) => {
  const pageId = context.params?.pageId as string;
  let recordMap = {} as ExtendedRecordMap;
  const foundRouterItem = routerData.find((router) => router.path === pageId);
  if (foundRouterItem && foundRouterItem.notionId) {
    recordMap = await notion.getPage(foundRouterItem!.notionId);
  } else {
    recordMap = await notion.getPage(pageId);
  }

  return {
    props: {
      recordMap,
    },
    revalidate: 10,
  };
}) satisfies GetStaticProps<{
  recordMap: ExtendedRecordMap;
}>;

export async function getStaticPaths() {
  if (isDev) {
    return {
      paths: [],
      fallback: true,
    };
  }

  const mapPageUrl = defaultMapPageUrl(rootNotionPageId);
  const pages = await getAllPagesInSpace(rootNotionPageId, rootNotionSpaceId, notion.getPage, {
    traverseCollections: false,
  });

  const paths = Object.keys(pages)
    .map((pageId) => mapPageUrl(pageId))
    .filter((path) => path && path !== '/');

  return {
    paths,
    fallback: true,
  };
}

export default function Page({ recordMap }: { recordMap: ExtendedRecordMap }) {
  return (
    <NotionPage
      recordMap={recordMap}
      rootDomain={rootDomain}
      rootPageId={rootNotionPageId}
      previewImagesEnabled={previewImagesEnabled}
    />
  );
}
