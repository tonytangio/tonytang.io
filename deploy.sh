#!/bin/bash
git pull &&
cd client &&
yarn install &&
yarn build &&
cd ../server &&
yarn install &&
yarn start || yarn restart