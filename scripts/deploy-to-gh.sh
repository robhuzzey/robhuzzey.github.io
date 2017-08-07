#!/bin/bash
cp CNAME .nojekyll ./out
git add .
git commit -m "deploy commit"
git push origin HEAD
git push origin `git subtree split --prefix out generator`:master --force
