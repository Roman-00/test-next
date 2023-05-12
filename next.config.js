const path = require('path');
const { i18n } = require('./next-i18next.config');

/**
 * Конфигурация приложения
 *
 * @type {import('next').NextConfig}
 */
module.exports = {
    i18n,
    reactStrictMode: true,
    sassOptions:     {
        fibber:       false,
        includePaths: [path.join(__dirname, 'styles')]
    },
    webpack(config) {
        const fileLoaderRule = config.module.rules.find((rule) =>
            rule.test?.test?.('.svg'),
        )

        config.module.rules.push(
            {
                ...fileLoaderRule,
                test:          /\.svg$/i,
                resourceQuery: /url/
            },
            {
                test:          /\.svg$/i,
                issuer:        /\.[jt]sx?$/,
                resourceQuery: { not: /url/ },
                use:           ['@svgr/webpack']
            },
        )

        return config
    }
}
