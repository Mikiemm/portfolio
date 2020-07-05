const withMDX = require("@next/mdx")()

module.exports = withMDX({
  pageExtensions: ["js", "jsx", "mdx"],
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: [
        {
          loader: "@svgr/webpack",
          options: {
            svgoConfig: {
              plugins: [
                {
                  removeViewBox: false,
                },
              ],
            },
          },
        },
      ],
    })

    return config
  },
})
