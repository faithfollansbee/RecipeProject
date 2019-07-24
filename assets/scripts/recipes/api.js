const config = require('../config')
const store = require('../store')

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
    url: config.apiUrl + '/recipes',
    method: 'POST',
    data: formData,
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const viewRecipes = formData => {
  return $.ajax({
    url: config.apiUrl + '/recipes',
    method: 'GET',
    data: formData,
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

module.exports = {
  signUp,
  signIn,
  signOut,
  changePassword,
  addRecipe,
  viewRecipes
}
