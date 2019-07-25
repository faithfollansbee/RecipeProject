const getFormFields = require('../../../lib/get-form-fields')
const api = require('./api')
const ui = require('./ui')

const onSignUp = event => {
  const form = event.target
  const formData = getFormFields(form)
  console.log(formData)
  api.signUp(formData)
    .then(ui.signUpSuccessful)
    .catch(ui.signUpFailure)
}

const onSignIn = event => {
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)
  api.signIn(formData)
    .then(ui.signInSuccessful)
    .catch(ui.signInFailure)
  //  .then(api.viewRecipes)
  //  .then(ui.viewRecipesSuccessful)
}

const onSignOut = event => {
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)

  api.signOut(formData)
    .then(ui.signOutSuccessful)
    .catch(ui.signoutFailure)
}

const onChangePassword = event => {
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)

  api.changePassword(formData)
    .then(ui.changePasswordSuccessful)
    .catch(ui.changePasswordFailure)
}

const onAddRecipe = event => {
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)
  console.log(formData)
  api.addRecipe(formData)
    .then(ui.addRecipeSuccessful)
    .catch(ui.addRecipeFailure)
    // .then(api.viewRecipes)
    // .then(ui.viewRecipesSuccessful)
}

const onDeleteRecipe = (event) => {
  // const id = $(event.target).data('id')
  event.preventDefault()
  console.log('clicked to delete')
  // const form = event.target
  // const formData = getFormFields(form)
  const recipeId = $(event.target).closest('section').data('id')
  api.deleteRecipe(recipeId)
    .then(() => onGetRecipes(event))
    .catch(ui.failure)
  // api.deleteRecipe(id) // (id)
    // .then(ui.deleteRecipeSuccessful)
    // .then(ui.viewRecipes)
    // .then(ui.viewRecipesSuccessful)
    // .catch(ui.delteRecipeFailure)
    // .then(() => {
    //  onGetRecipes(event)
    // })
    // .catch(ui.failure)
}

// const onUpdateRecipe = event => {
//   event.preventDefault()
//   const form = event.target
//   const formData = getFormFields(form)
//   api.updateRecipe(formData) // (formData, id)
//     .then(ui.updateRecipeSuccessful)
//     .then(ui.viewRecipes)
//     .then(ui.viewRecipesSuccessful)
//     .catch(ui.updateRecipeFailure)
// }

const onGetRecipes = (event) => {
  event.preventDefault()
  console.log('here?')
  api.getRecipes()
    .then(ui.getRecipesSuccess)
    .catch(ui.getRecipesFailure)
}

const addHandlers = () => {
  $('#getRecipesButton').on('click', onGetRecipes)
  // $('#delete-recipe').on('click', onDeleteRecipe)
  //  $('#clearBooksButton').on('click', onClearRecipes)
  //  $('body').on('click', '.delete-recipe', onDeleteRecipe)

  // $("#albums-display").on("click", ".btn-danger", onDeleteRecipe)
  // }
  $('.content').on('click', '.delete-recipe', onDeleteRecipe)
}

const onUpdateRecipe = (event) => {
  event.preventDefault()
  const id = $(event.target).data('id')
  const form = event.target
  const formData = getFormFields(form)
  api.updateRecipe(id, formData)
  api.getRecipes()
    .then(() => {
      onGetRecipes(event)
    })
    .catch(ui.failure)
}

module.exports = {
  onSignUp,
  onSignIn,
  onSignOut,
  onChangePassword,
  onAddRecipe,
  onDeleteRecipe,
  onUpdateRecipe,
  onGetRecipes,
  addHandlers
}
