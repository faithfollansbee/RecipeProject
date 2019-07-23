#!/bin/bash

curl "http://localhost:4741/recipes" \
 --include \
 --request PATCH \
 --header "Content-Type: application/json" \
 --data '{
   "recipe": {
     "name": "'"${NAME}"'",
     "ingredients": "'"${INGREDIENTS}"'",
     "cooking_time": "'"${COOKING_TIME}"'",
     "meal": "'"${MEAL}"'"
   }
 }'

echo
