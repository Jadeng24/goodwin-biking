export const isExternalUrl = (linkUrl: string): boolean => {
  // example: 'http://...' for external or '/bikepacking-bags' for internal
  const isExternal = linkUrl.includes("http");

  return isExternal;
};
