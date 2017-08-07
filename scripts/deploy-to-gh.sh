#!/bin/bash
cp CNAME .nojekyll ./out
git push origin `git subtree split --prefix out generator`:master --force
