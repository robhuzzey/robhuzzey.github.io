#!/bin/bash
git push origin `git subtree split --prefix out generator`:master --force
