echo "packages is $1"
echo "dir is $2"
nx g lib $! --directory=$2/$1 --linter=none --unitTestRunner=none --bundler=tsc