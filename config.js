System.config({
    transpiler: 'plugin-babel',
    packages:{
        app:{
            defaultExtension: 'jsx'
        }
    },
    map: {
        'react': 'https://unpkg.com/react@15.3.1/dist/react.js',
        'react-dom': 'https://unpkg.com/react-dom@15.3.1/dist/react-dom.js',
        'plugin-babel': 'https://unpkg.com/systemjs-plugin-babel@0.0.25/plugin-babel.js',
        'systemjs-babel-build': 'https://unpkg.com/systemjs-plugin-babel@0.0.25/systemjs-babel-browser.js'
    },
    meta: {
        '*.jsx': {
            babelOptions: {
                react: true
            }
        }
    }
});
System.import('app/main.jsx').catch(
    console.error.bind(console));