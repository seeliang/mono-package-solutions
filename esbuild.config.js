require('esbuild').build({
    entryPoints: ['./index.js'],
    bundle: true,
    platform: 'node',
    outfile: 'dist/index.js',
    sourcemap: true,
    target: 'node12',
})
