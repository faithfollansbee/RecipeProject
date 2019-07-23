const config = require('./config')
const store = require('./store')

const signUp = formData => {
  return $.ajax({
    url: config.apiUrl + '/sign-up',
    data: formData,
    method: 'POST'
  })
}

const signIn = formData => {
  return $.ajax({
    url: config.apiUrl + '/sign-in',
    data: formData,
    method: 'POST'
  })
}
module.exports = {
  signUp,
  signIn
}
const signOut = formData => {
  return $.ajax({
    url: config.apiUrl + '/sign-out',
    data: formData,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const changePassword = formData => {
  return $.ajax({
    url: config.apiUrl + '/change-password',
    method: 'PATCH',
    data: formData,
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const addRecipe = formData => {
  return $.ajax({
    url: config.apiUrl + '/add-recipe',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: {
      'name': 'name',
      'cooking_time': 'cooking_time',
      'ingredients': 'ingredients',
      'meal': 'meal'
    }
  })
}

module.exports = {
  signUp,
  signIn,
  signOut,
  changePassword,
  addRecipe
}
