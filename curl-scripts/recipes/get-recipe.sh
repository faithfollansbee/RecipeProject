#!/bin/bash

curl --include "http://localhost:4741/recipes" \
--include \
--request GET \
--header "Content-Type: application/json" \
--header "Authorization: Token token=${TOKEN}"

echo
