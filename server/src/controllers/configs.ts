import type {Core} from '@strapi/strapi';

import pluginId from '../../../admin/src/pluginId';


export default ({strapi}: {strapi: Core.Strapi}) => ({
  get(_ctx) {
    const configs = strapi.config.get(`plugin.${pluginId}`);
    return configs;
  },
});
