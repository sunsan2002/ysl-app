export function parseUrl(fullPath) {
  const [path, queryStr] = fullPath.split('?');
  const name = path.slice(path.lastIndexOf('/') + 1);
  const query = {};
  queryStr
    ?.split('&')
    .map((i) => i.split('='))
    .forEach((i) => (query[i[0]] = i[1]));
  return {
    name,
    path,
    query
  };
}
