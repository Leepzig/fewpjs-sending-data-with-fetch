// Add your code here

const form = () => document.querySelector("form")
const usernameInput = () => document.querySelector("#username-input")
const userEmailInput = () => document.querySelector("#email-input")

document.addEventListener("DOMContentLoaded", () => {
  addSubmitEvent()
})

const addSubmitEvent = () => {
  form().addEventListener('submit', e => {
    e.preventDefault()
    submitData()
  })
}

const submitData = () => {
  const data = getUserAndEmail()
  const fetchConfiguration = {
    method: "POST",
    headers: {
      "Content-Type":"application/json",
      "Accept":"application/json"
    },
    body:JSON.stringify(data)
  }

  fetch("http://localhost:3000/users", fetchConfiguration)
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.log(error.message))
}

const getUserAndEmail = () => {
  const userInfo = {
    name:usernameInput().value,
    email:userEmailInput().value
  }
  return userInfo
}