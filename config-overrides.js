const {alias} = require("react-app-rewire-alias")

module.exports = function override(config, env){
    alias({
        '@components': 'src/components',
        '@UI': 'src/components/UI',
        '@constants': 'src/constants',
        '@hoc-helpers': 'src/hoc-helpers',
        '@pages': 'src/pages',
        '@utils': 'src/utils',
        '@styles': 'src/styles',
        '@routes': 'src/routes',
        '@static': 'src/static',
        '@hooks': 'src/hooks',
        '@services': 'src/services',
    })(config);

    return config
}