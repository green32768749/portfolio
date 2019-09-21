npm run build

cd dist

"綠綠.tw" > CNAME
git init
git add -A
git commit -m 'deploy'

git push -f git@github.com:green32768749/portfolio.git master:gh-pages

cd -
