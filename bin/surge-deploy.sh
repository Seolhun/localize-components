if [ $TRAVIS_BRANCH = 'master' ]; then
  npm run deploy:docs
  npm run deploy:ex
elif [ $TRAVIS_BRANCH = 'develop' ] then
  npm run deploy:docs:dev
  npm run deploy:ex:dev
fi
