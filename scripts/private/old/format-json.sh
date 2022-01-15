#!/bin/bash

#####
# Helper script for pretty formatting of json files
#####

for file in `ls -a app/characters | grep -v \\\.\$`; do
  cat app/characters/$file | python -mjson.tool > tmp.json
  rm app/characters/$file
  mv tmp.json app/characters/$file
done
