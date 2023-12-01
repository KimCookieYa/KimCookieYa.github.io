interface Router {
  label: string;
  path: string;
  isNotion: boolean;
  notionId: string;
}

export const routerData: Router[] = [
  {
    label: 'home',
    path: '/',
    isNotion: true,
    notionId: 'c2f734b31938417d879063c831fb2759',
  },
  {
    label: 'resume',
    path: '/resume',
    isNotion: true,
    notionId: 'a275ea5e692047f7ad73b5242fbd9086',
  },
  {
    label: 'portfolio',
    path: '/portfolio',
    isNotion: true,
    notionId: 'b30f8a5319d64d1e933130d680703abd',
  },
];
