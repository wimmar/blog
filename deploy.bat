set -e
cd .\dist

git init
git add -A
git commit -m 'deploy'

git push -f git@github.com:wimmar/blog.git master:gh-pages