module.exports = {
    root: true,
    env: {
        node: true,
    },
    extends: [
        'next/core-web-vitals',
    ],
    parserOptions: {
        tsconfigRootDir: __dirname,
        ecmaVersion: 2022,
    },
    rules: {
        'no-console':   process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        'no-debugger':  process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        'indent': ['error', 4],
        'quotes': ['error', 'single'],
        'key-spacing': [
            'error',
            {
                'align': 'value'
            }
        ],
    },
    overrides: [
        {
            files: [
                '**/*.{ts,tsx,vue}',
            ],
            rules: {
                'no-undef':             'off',
                'import/no-unresolved': 'off',
            },
        },
        {
            files: [
                '**/*.vue',
            ],
            rules: {
                'vue/multi-word-component-names': 'off',
            },
        },
    ],
}
