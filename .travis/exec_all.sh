#!/bin/bash

###
# sets all scripts in .travis as executable
###

for filename in .travis/*.sh; do
  echo "Setting $filename as executable"
  chmod +x "$filename"
done
