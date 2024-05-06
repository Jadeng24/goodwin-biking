/**
 * Opens new tab with given url
 * @param url example: "https://youtube.com/@GoodwinBiking"
 */
export const linkToExternal = (url: string): void => {
  window.open(url, "_blank");
};
