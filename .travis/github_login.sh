#!/bin/bash

git config --global user.email travis@travis-ci.org # set email
git config --global user.name Travis CI # set username

username="$(git config --global user.name)"
email="$(git config --global user.email)"

git checkout master # checkout master branch
git pull # pull any changes

echo "Logged into git as $username with $email"
