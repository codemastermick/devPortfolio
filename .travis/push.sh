#!/bin/sh

success=1

git remote rm origin
git remote add origin https://codemastermick:${GH_TOKEN}@github.com/codemastermick/ng-devops.git >/dev/null 2>&1
git pull
git push origin master --quiet && success=0

if [[ $success == 0 ]]; then
  echo "Changes pushed to Github"
else
  echo "Failed to push changes to Github"
fi

exit $success
