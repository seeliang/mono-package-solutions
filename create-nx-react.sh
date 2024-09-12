create-react () {
    local packages="@seeliang/mono-react-$1"
    local dir="design/$1"
    echo "packages is $packages"
    echo "dir is at $dir"
    nx g @nx/react:lib $packages --directory=$dir --linter=none --unitTestRunner=none --bundler=none --style=@emotion/styled
    nx g @nx/esbuild:configuration $packages --platform=browser 
     node updatePackageJson.js --update=main:dist/index.js --update=version:1.0.0 --pathToJson=design/footer/package.json --update=scripts:build:"nx build" --update=scripts:test:"echo \"Error: no test specified\" && exit 0" 
}

create-react $1
# nx g @nx/react:lib @seeliang/mono-react-$1 --directory=design/$1 --linter=none --unitTestRunner=none --bundler=none --style=@emotion/styled