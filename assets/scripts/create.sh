curl --include --request POST "http://localhost:4741" \
  --header "Content-type: application/json" \
  --data '{
    "recipe": {
      "name": "'"${NAME}"'",
      "ingredients": "'"${INGREDIENTS}"'"
      "cooking_time": "'"${COOKING_TIME}"'"
      "meal": "'"${MEAL}"'"
    }
  }'

  echo
