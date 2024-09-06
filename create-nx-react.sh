echo "packages is $1"
echo "dir is design"
nx g @nx/react:lib @seeliang/mono-react-$1 --directory=design/$1 --linter=none --unitTestRunner=none --bundler=vite --style=@emotion/styled