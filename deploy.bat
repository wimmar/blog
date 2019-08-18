set -e
cd .\public

git init
git add -A
git commit -m "Deploy gh pages"

git push -f git@github.com:wimmar/blog.git master:gh-pages