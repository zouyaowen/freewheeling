#!/bin/bash

rm -rf /work/front_end/freewheeling/dist

npm run docs:build

cd /work/front_end

cp -rf ./../freewheeling/.vitepress/dist/ ./freewheeling/

# 最终部署路径是/work/front_end/freewheeling/dist
