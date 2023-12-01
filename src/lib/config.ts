export const rootNotionPageId = 'c2f734b31938417d879063c831fb2759';
export const rootNotionSpaceId = '';

export const previewImagesEnabled = true;

export const useOfficialNotionAPI =
  false || (process.env.USE_OFFICIAL_NOTION_API === 'true' && process.env.NOTION_TOKEN);

export const isDev = process.env.NODE_ENV === 'development' || !process.env.NODE_ENV;

export const port = process.env.PORT || 8080;
export const rootDomain = isDev ? `localhost:${port}` : '8080';
