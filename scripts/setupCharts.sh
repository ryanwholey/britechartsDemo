#!/bin/sh

mkdir -p src/_charts/css 

cp -r node_modules/britecharts/src/charts/ src/_charts/
cp node_modules/britecharts/dist/css/britecharts.css src/_charts/css/
