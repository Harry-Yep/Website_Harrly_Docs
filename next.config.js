const withNextra = require('nextra')({
    theme: 'nextra-theme-docs',
    themeConfig: './theme.config.jsx',
    latex: true,
});

module.exports = withNextra({
    i18n: {
        locales: ['en', 'zh-CN'],
        defaultLocale: 'en',
    },
});
