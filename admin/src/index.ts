import pluginPkg from "../../package.json";
import pluginId from "./pluginId";
import {Initializer} from "./components/Initializer";
import {Editor as ReactMdEditor} from "./components/ReactMdEditor";
import {getTranslation} from "./utils/getTranslation";

const name = pluginPkg.strapi.name;

export default {
  register(app: any) {
    app.addFields({ type: "wysiwyg", Component: ReactMdEditor });
    const plugin = {
      id: pluginId,
      initializer: Initializer,
      isReady: false,
      name,
    };

    app.registerPlugin(plugin);
  },

  bootstrap(app: any) {},

  async registerTrads(app: any) {
    const { locales } = app;

    const importedTranslations = await Promise.all(
      (locales as string[]).map((locale) => {
        return import(`./translations/${locale}.json`)
          .then(({ default: data }) => {
            return {
              data: getTranslation(data),
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

    return importedTranslations;
  },
};
