/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [],
    theme: {
        extend: {
            colors: {
                // backgrounds
                'primary-bg': '#FFFFFF',
                'secondary-bg': '#F6F6F6',
                'tertiary-bg': '#EEEEEE',
                'primary-bg-invert': '#000000',
                'secondary-bg-invert': '#1F1F1F',
                'disabled-bg': '#F6F6F6',
                'overlay-art-bg': 'transparent',
                'overlay-dark-bg': '#0000004c',
                'overlay-light-bg': '#ffffff14',
                'accent-bg': '#276EF1',
                'negative-bg': '#E11900',
                'warning-bg': '#FFC043',
                'positive-bg': '#048848',
                'accent-light-bg': '#EFF3FE',
                'negative-light-bg': '#FFEFED',
                'warning-light-bg': '#FFFAF0',
                'positive-light-bg': '#E6F2ED',

                // content
                primary: '#000000',
                'primary-invert': '#ffffff',
                secondary: '#545454',
                'secondary-invert': '#CBCBCB',
                tertiary: '#6B6B6B',
                'tertiary-invert': '#AFAFAF',
                accent: '#276EF1',
                positive: '#048848',
                negative: '#E11900',
                warning: '#FFC043',

                // utility
            },
        },
    },
    plugins: [],
}
