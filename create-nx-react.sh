echo "packages is $1"
echo "dir is $2"
nx g @nx/react:library $1 --directory=$2/$1 --linter=none --unitTestRunner=none --bundler=none --style=@emotion/styled