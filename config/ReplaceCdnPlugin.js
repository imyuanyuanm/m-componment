/*
 * @Author: beth.miao 
 * @Date: 2019-08-14 15:40:11 
 * @Last Modified by: beth.miao
 * @Last Modified time: 2019-08-14 15:42:42
 * option Array
 */

class ReplaceCdnPlugin {
    constructor(option) {
        this.defaultOption = [
            { source: 'index.html', original: '"', target: "'", }
        ];
        this.option = [...option, ...this.defaultOption]
    }
    apply(compiler) {
        // emit 是异步 hook，使用 tapAsync 触及它，还可以使用 tapPromise/tap(同步) 注意：tapPromise返回promise 无 callback参数
        compiler.hooks.emit.tapAsync('ReplaceCdnPlugin', (compilation, callback) => {
            const option = this.option;
            option.forEach(element => {
                const templateStr = compilation.assets[element.source].source().replace(new RegExp(element.original, 'g'), element.target);
                compilation.assets[element.source] = {
                    source: function () {
                        return templateStr;
                    },
                    size: function () {
                        return templateStr.length;
                    }
                }
            });
            callback();
        });
    }
}

module.exports = ReplaceCdnPlugin;

