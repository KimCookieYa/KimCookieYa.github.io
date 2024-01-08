import dynamic from 'next/dynamic';
import Link from 'next/link';
import { useRouter } from 'next/router';

import { ExtendedRecordMap } from 'notion-types';
import { NotionRenderer } from 'react-notion-x';

import Loading from './Loading';

const Collection = dynamic(() =>
  import('react-notion-x/build/third-party/collection').then((m) => m.Collection)
);
const Modal = dynamic(() => import('react-notion-x/build/third-party/modal').then((m) => m.Modal));
const Equation = dynamic(() =>
  import('react-notion-x/build/third-party/equation').then((m) => m.Equation)
);

export default function NotionPage({
  recordMap,
  previewImagesEnabled,
  rootPageId,
  rootDomain,
}: {
  recordMap: ExtendedRecordMap;
  previewImagesEnabled?: boolean;
  rootPageId?: string;
  rootDomain?: string;
}) {
  const router = useRouter();

  if (router.isFallback) {
    return <Loading />;
  }

  if (!recordMap) {
    return null;
  }
  // useful for debugging from the dev console
  if (typeof window !== 'undefined') {
    const keys = Object.keys(recordMap?.block || {});
    const block = recordMap?.block?.[keys[0]]?.value;
    const g = window as any;
    g.recordMap = recordMap;
    g.block = block;
  }

  return (
    <div className="mt-20">
      <NotionRenderer
        recordMap={recordMap}
        darkMode={false}
        rootDomain={rootDomain}
        rootPageId={rootPageId}
        previewImages={previewImagesEnabled}
        components={{
          nextLink: Link,
          Collection,
          Modal,
          Equation,
        }}
        className=""
      />
    </div>
  );
}

NotionPage.defaultProps = {
  previewImagesEnabled: true,
  rootPageId: '',
  rootDomain: '8080',
};
