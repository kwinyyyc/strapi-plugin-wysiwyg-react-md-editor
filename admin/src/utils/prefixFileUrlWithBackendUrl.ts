const prefixFileUrlWithBackendUrl = (fileURL: string) => {
  return !!fileURL &&
    fileURL.startsWith("/") &&
    "strapi" in window &&
    window.strapi instanceof Object &&
    "backendURL" in window.strapi &&
    window.strapi.backendURL
    ? `${window.strapi.backendURL}${fileURL}`
    : fileURL;
};

export default prefixFileUrlWithBackendUrl;
