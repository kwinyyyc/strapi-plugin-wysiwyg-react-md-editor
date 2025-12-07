import pluginPkg from "../../package.json";
import { PLUGIN_ID } from "./utils/pluginId";
import { Initializer } from "./components/Initializer";
import { CustomField } from "./components/CustomField";

import { getTranslation } from "./utils/getTranslation";

const name = pluginPkg.strapi.name;

export default {
  register(app: any) {
    app.customFields.register({
      name,
      type: "richtext",
      pluginId: PLUGIN_ID,
      intlLabel: {
        id: `${PLUGIN_ID}.label`,
        defaultMessage: PLUGIN_ID,
      },
      intlDescription: {
        id: `${PLUGIN_ID}.description`,
        defaultMessage: "The markdown text editor for every use case",
      },
      components: {
        Input: async () => await import("./components/CustomField"),
      },
    });
  },
  async registerTrads({ locales }: any) {
    const importedTrads = await Promise.all(
      locales.map((locale: any) => {
        return import(`./translations/${locale}.json`)
          .then(({ default: data }) => {
            return {
              data: data,
              locale,
            };
          })
          .catch(() => {
            return {
              data: {},
              locale,
            };
          });
      })
    );

    return Promise.resolve(importedTrads);
  },
};
