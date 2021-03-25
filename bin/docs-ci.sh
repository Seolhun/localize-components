cd docs
npm install
npm run build

if [ $TRAVIS_BRANCH = 'master' ]; then
  surge dist/ http://localize-components-docs.surge.sh --token ${{secrets.SURGE_TOKEN}}
else
  # Develop
  surge dist/ http://dev.localize-components-docs.surge.sh --token ${{secrets.SURGE_TOKEN}}
fi
