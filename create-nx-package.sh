echo "packages is $1"
echo "dir is pacakges"
nx g @nx/js:lib @seeliang/mono-$1 --directory=pacakges/$1 --linter=none --unitTestRunner=none --bundler=tsc