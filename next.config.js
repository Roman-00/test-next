const path = require('path');
const { i18n } = require('./next-i18next.config');

/**
 * Конфигурация приложения
 *
 * @type {import('next').NextConfig}
 */
module.exports = {
    reactStrictMode: true,
    i18n,
    sassOptions:     {
        fibber:       false,
        includePaths: [path.join(__dirname, 'styles')]
    }
}
