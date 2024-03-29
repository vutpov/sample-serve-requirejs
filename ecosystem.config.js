module.exports = {
    apps: [
        {
            name: 'front',
            script: 'pnpm',
            args: 'dev:front',
            ignore_watch : ["node_modules"],
            watch: ["front"],
        },
        {
            name: 'back',
            script: 'pnpm',
            args: 'dev:back',
            ignore_watch : ["node_modules"],
            watch: ["back"],
        },
    ],
}
