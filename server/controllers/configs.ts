import { Strapi } from "@strapi/strapi";
import pluginId from "../../admin/src/pluginId";

export default ({ strapi }: { strapi: Strapi }) => ({
  get(ctx) {
    const configs = strapi.config.get(`plugin.${pluginId}`);
    return configs;
  },
});
