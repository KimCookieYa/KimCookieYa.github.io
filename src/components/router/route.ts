interface Router {
  label: string;
  path: string;
  isNotion: boolean;
  notionId?: string;
}

export const routerData: Router[] = [
  {
    label: 'Home',
    path: 'home',
    isNotion: true,
    notionId: 'c2f734b31938417d879063c831fb2759',
  },
  {
    label: 'Resume',
    path: 'resume',
    isNotion: true,
    notionId: 'a275ea5e692047f7ad73b5242fbd9086',
  },
  {
    label: 'Portfolio',
    path: 'portfolio',
    isNotion: true,
    notionId: 'b30f8a5319d64d1e933130d680703abd',
  },
  {
    label: 'Github',
    path: 'https://github.com/KimCookieYa',
    isNotion: false,
  },
  {
    label: 'Tistory',
    path: 'https://insengnewbie.tistory.com/',
    isNotion: false,
  },
];
