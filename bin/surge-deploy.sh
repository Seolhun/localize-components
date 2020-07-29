if [ $TRAVIS_BRANCH = 'master' ]; then
  npm run deploy:docs
elif [ $TRAVIS_BRANCH = 'develop' ] then
  npm run deploy:docs:dev
fi
