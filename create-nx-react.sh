echo "packages is $1"
echo "dir is $2"
nx g @nx/react:lib @seeliang/mono-react-$1 --directory=$2/$1 --linter=none --unitTestRunner=none --bundler=vite --style=@emotion/styled