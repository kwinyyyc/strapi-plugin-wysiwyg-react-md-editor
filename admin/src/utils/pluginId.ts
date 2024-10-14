import pluginPkg from '../../../package.json';

export const PLUGIN_ID = pluginPkg.strapi.name || pluginPkg.name.replace(/^(@[^-,.][\w,-]+\/|strapi-)plugin-/i, '');
