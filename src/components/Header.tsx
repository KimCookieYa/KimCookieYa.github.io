import Link from 'next/link';
import { routerData } from './router/route';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';

export default function Header() {
  const router = useRouter();

  const [scroll, setScroll] = useState(0);

  const handleScroll = () => {
    const position = window.scrollY;
    const totalHeight = document.body.scrollHeight - window.innerHeight;
    const progress = (position / totalHeight) * 100;

    setScroll(progress);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className="fixed flex flex-col h-12 w-full top-0 bg-white items-center z-[99999]">
      <nav className="flex w-full justify-around">
        {routerData.map((item) => {
          if (!item.isNotion) {
            return (
              <a href={item.path} key={item.label} target='_blank'>
                <button
                  className={[
                    'px-4 py-2 hover:text-blue-500 hover:border-b-2 hover:border-blue-500',
                    router.pathname === item.path ? ' font-bold' : '',
                  ].join(' ')}
                >
                  {item.label}
                </button>
              </a>)
          }

          return (
            <Link href={item.path} key={item.label}>
              <button
                className={[
                  'px-4 py-2 hover:text-blue-500 hover:border-b-2 hover:border-blue-500',
                  router.pathname === item.path ? ' font-bold' : '',
                ].join(' ')}
              >
                {item.label}
              </button>
            </Link>
          );
        })}
      </nav>
      <div
        className="h-1 bg-blue-500 origin-left w-full"
        style={{ transform: `scaleX(${scroll /100})` }}
      ></div>
    </header>
  );
}
