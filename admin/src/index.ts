import pluginPkg from "../../package.json";
import pluginId from "./pluginId";
import { Initializer } from "./components/Initializer";
import { Editor as ReactMdEditor } from "./components/ReactMdEditor";
import { getTranslation } from "./utils/getTranslation";

const name = pluginPkg.strapi.name;

export default {
  register(app: any) {
    app.addFields({ type: "richtext", Component: ReactMdEditor });
    const plugin = {
      id: pluginId,
      initializer: Initializer,
      isReady: false,
      name,
    };

    app.registerPlugin(plugin);
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
