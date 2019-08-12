#!/bin/bash

git config --global user.email travis@travis-ci.org # set email
git config --global user.name Travis CI             # set username

username="$(git config --global user.name)"     # capture username
email="$(git config --global user.email)"       # capture email address

echo "Logged into git as $username with $email" # provide feedback
