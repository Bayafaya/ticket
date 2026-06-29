export const parseParams = (
  basePath: string,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  params: Record<string, any>
): string => {
  const query = Object.entries(params)
    .filter(([, value]) => value !== undefined && value !== null)
    .map(
      ([key, value]) =>
        `${encodeURIComponent(key)}=${encodeURIComponent(String(value))}`
    )
    .join("&");

  return query ? `${basePath}?${query}` : basePath;
};
