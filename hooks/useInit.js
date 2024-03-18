import { parseUrl } from '@/utils/shared';

export function useInit() {
  const pages = getCurrentPages();
  const page = pages[pages.length - 1];
  const fullPath = page.$page.fullPath;
  const {
    name: pageName,
    path: pagePath,
    query: pageQuery
  } = parseUrl(fullPath);

  return {
    pageName,
    pagePath,
    pageQuery
  };
}
