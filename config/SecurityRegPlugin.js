class SecurityRegPlugin {
    constructor(option) {
        // this.defaultOption = [
        //     { source: 'index.html', original: '"', target: "'", }
        // ];
        // this.option = [...option, ...this.defaultOption]
    }
    isValid(str) {
        let result = true;
        let __str;
        let regs = [
            /innerHTML/g,
            /outerHTML/g,
            /document.write/g,
            /.source+/g,
        ];
        for (let i = 0, len = regs.length; i < len; i++) {
            if (regs[i].test(str)) {
                result = false;
                __str = regs[i];
            }
        }
        if (result) {
            console.log(`代码质量很棒哦，不存在脚本注入风险！`)
        } else {
            console.log(`代码中使用了${__str}存在脚本注入风险！`)
        }
    };
    apply(compiler) {
        // emit 是异步 hook，使用 tapAsync 触及它，还可以使用 tapPromise/tap(同步) 注意：tapPromise返回promise 无 callback参数
        compiler.hooks.afterPlugins.tap('SecurityRegPlugin', (compiler, callback) => {
            console.log(compiler)
            // callback();
        });
    }
}

module.exports = SecurityRegPlugin;

