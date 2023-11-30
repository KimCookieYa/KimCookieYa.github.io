import type { InferGetStaticPropsType, GetStaticProps } from 'next';
import { NotionAPI } from 'notion-client';
import { ExtendedRecordMap } from 'notion-types';
import { NotionRenderer } from 'react-notion-x';
import { Collection } from 'react-notion-x/build/third-party/collection';
import { routerData } from '../../components/router/route';

export default function Home(props: InferGetStaticPropsType<typeof getStaticProps>) {
  const recordMap = props.recordMap;
  return (
    <div>
      Hello, World!
      <NotionRenderer
        recordMap={recordMap}
        fullPage
        darkMode={false}
        components={{
          Collection,
        }}
      />
    </div>
  );
}

export const getStaticProps = (async () => {
  const notionId = routerData.filter((item) => item.isNotion && item.label === 'Home')[0].notionId;

  const notion = new NotionAPI();
  const recordMap: ExtendedRecordMap = await notion.getPage(notionId);
  return {
    props: {
      recordMap,
    },
  };
}) satisfies GetStaticProps<{ recordMap: ExtendedRecordMap }>;
