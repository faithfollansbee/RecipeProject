#!/bin/bash

curl "http://localhost:4741/recipes" \
 --include \
 --request POST \
 --header "Content-Type: application/json" \
 --data {
   "recipe": {
     "name": "'"${NAME}"'",
      "meal": "'"${MEAL}"'",
      "cooking_time": "'"${COOKING_TIME}"'",
     "ingredients": "'"${INGREDIENTS}"'"
   }
 }'
