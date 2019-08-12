#!/bin/sh

# Stage the modified files in docs
# Create a new commit with a custom build message
# with "[skip ci]" to avoid a build loop
# and Travis build number for reference

echo "Generating CHANGELOG.md. This might take a minute..."
auto-changelog -p # generate a changelog
git add -f CHANGELOG.md # add the changelog
git commit -m "Regenerate changelog: build $TRAVIS_BUILD_NUMBER [skip ci]" # commit to git
