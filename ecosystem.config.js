module.exports = [
  {
    script: ".output/server/index.mjs",
    name: "nuxt3",
    exec_mode: "cluster",
    instances: 4,
  },
];
