export default [
  {
    method: "GET",
    path: "/",
    handler: "configs.get",
    config: {
      policies: [],
      auth: false,
    },
  },
];
