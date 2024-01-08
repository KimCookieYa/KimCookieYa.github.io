import Link from 'next/link';
import { routerData } from './router/route';
import { useRouter } from 'next/router';

export default function Header() {
  const router = useRouter();

  return (
    <header className="fixed flex h-12 w-full top-0 bg-white items-center z-[99999]">
      <nav className="flex w-full justify-around">
        {routerData.map((item) => {
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
    </header>
  );
}
