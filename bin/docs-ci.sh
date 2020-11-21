if [ -z "$TRAVIS_PULL_REQUEST" ] || [ "$TRAVIS_PULL_REQUEST" == "false" ]; then
  if [ "$TRAVIS_BRANCH" == "master" ] || [ "$TRAVIS_BRANCH" == "develop" ]; then
    cd docs
    npm install
    npm run build

    if [ $TRAVIS_BRANCH = 'master' ]; then
      surge dist/ http://localize-components-docs.surge.sh
    else
      # Develop
      surge dist/ http://dev.localize-components-docs.surge.sh
    fi
  fi
fi
