interface Router {
  label: string;
  path: string;
  isNotion: boolean;
  notionId: string;
}

export const routerData: Router[] = [
  {
    label: 'Home',
    path: '/',
    isNotion: true,
    notionId: 'c2f734b31938417d879063c831fb2759',
  },
];
