// This is a minimal config.
// If you need the full config, get it from here:
// https://unpkg.com/browse/tailwindcss@latest/stubs/defaultConfig.stub.js
module.exports = {
    purge: [
        // Templates within theme app (e.g. base.html)
        '../templates/**/*.html',
        // Templates in other apps. Uncomment the following line if it matches
        // your project structure or change it to match.
        '../../templates/**/*.html',
    ],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            colors: {
                primary: '#C0A9BD',
                secondary: {
                    100: '#94A7AE',
                    200: '#6A766A',
                    300: '#F4F2F3'
                }
            },
            fontFamily: {
                body: ['Poppins']
            }
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
}
