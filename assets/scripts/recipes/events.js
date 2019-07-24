const getFormFields = require('../../../lib/get-form-fields')
const api = require('./api')
const ui = require('./ui')
// external js: isotope.pkgd.js
// const store = require('./store')
// <script src="scripts/templates/recipe-listing.handlebars"></script>
// var template = document.getElementById("templateId").innerHTML

const onSignUp = event => {
  event.preventDefault()
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
    .then(api.viewRecipes)
    .then(ui.viewRecipesSuccessful)
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
}

const onDeleteRecipe = event => {
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)
  api.deleteRecipe(formData) // (id)
    .then(ui.deleteRecipeSuccessful)
    .then(ui.viewRecipes)
    .then(ui.viewRecipesSuccessful)
    .catch(ui.delteRecipeFailure)
}

const onViewRecipes = event => {
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)
  console.log(formData)
  api.viewRecipes(formData)
    .then(ui.viewRecipesSuccessful)
    .catch(ui.viewRecipesFailure)
}

const onUpdateRecipe = event => {
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)
  api.updateRecipe(formData) // (formData, id)
    .then(ui.updateRecipeSuccessful)
    .then(ui.viewRecipes)
    .then(ui.viewRecipesSuccessful)
    .catch(ui.updateRecipeFailure)
}

module.exports = {
  onSignUp,
  onSignIn,
  onSignOut,
  onChangePassword,
  onAddRecipe,
  onDeleteRecipe,
  onViewRecipes,
  onUpdateRecipe
}
