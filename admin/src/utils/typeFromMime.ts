//strapi/packages/core/upload/admin/src/utils/typeFromMime.ts

const typeFromMime = (mime: string) => {
  if (mime.includes('image')) {
    return 'image';
  }
  if (mime.includes('video')) {
    return 'video';
  }
  if (mime.includes('audio')) {
    return'audio';
  }

  return 'doc'
};

export default typeFromMime;
