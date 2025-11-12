// module.exports = function (api) {
//   api.cache(true);
//   return {
//     presets: ['babel-preset-expo'],
//     plugins: ['inline-dotenv'],
//   };
// };


// module.exports = (api) => {
//   api.cache(true)
//   return {
//     presets: ["babel-preset-expo"],
//     plugins: ["inline-dotenv"],
//   }
// }

module.exports = (api) => {
  api.cache(true)
  return {
    presets: ["babel-preset-expo"],
    plugins: ["inline-dotenv", ["@babel/plugin-transform-react-compiler", { target: "18" }]],
  }
}