#!/bin/bash

curl "http://localhost:4741/recipes/${ID}" \
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

curl "https://wdi-library-api.herokuapp.com/examples/${ID}" \
  --include \
  --request PATCH \
  --header "Content-Type: application/json" \
  --header "Authorization: Token token=${TOKEN}" \
  --data '{
    "example": {
      "text": "'"${TEXT}"'"
    }
  }'

  echo
