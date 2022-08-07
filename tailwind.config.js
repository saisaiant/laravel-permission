const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
    // darkMode: 'class',
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
    ],

    theme: {
        extend: {
            // screens: {
            //     'light-mode': { raw: '(prefers-color-scheme: light)' },
            //   },
            screens: {
                'dark-mode': { raw: '(prefers-color-scheme: dark)' },
            },
            fontFamily: {
                sans: ['Nunito', ...defaultTheme.fontFamily.sans],
            },            
        },       
    },
    plugins: [require('@tailwindcss/forms')],
};
