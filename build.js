const esbuild = require("esbuild");

const nonProd = process.env.NODE_ENV !== "production";
console.log("process.env.NODE_ENV:", process.env.NODE_ENV);
esbuild
  .build({
    external: [
      "react",
      "react-dom",
      "react-intl",
      "@strapi/design-system",
      "@strapi/helper-plugin",
    ],
    format: "cjs",
    target: "esnext",
    entryPoints: ["src/ReactMdEditor/index.jsx"],
    sourcemap: nonProd ? true : false,
    minify: nonProd ? false : true,
    bundle: true,
    outfile: "admin/src/components/ReactMdEditor/index.js",
    plugins: [],
  })
  .catch((err) => {
    console.log(err), process.exit(1);
  });
