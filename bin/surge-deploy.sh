if [ "$TRAVIS_BRANCH" == "master" ] || [ "$TRAVIS_BRANCH" == "develop" ]; then
  if [ "$TRAVIS_BRANCH" == "master" ]; then
    npm run deploy:docs
    npm run deploy:ex
  else
    npm run deploy:docs:dev
    npm run deploy:ex:dev
  fi
else
  echo "This is Not master or develop Branch"
fi


