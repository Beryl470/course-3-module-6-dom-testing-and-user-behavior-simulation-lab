// Utility Functions
function createElement(tag, attributes = {}, text = '') {
  const element = document.createElement(tag)

  Object.keys(attributes).forEach(attr => {
    element.setAttribute(attr, attributes[attr])
  })

  if (text) {
    element.textContent = text
  }

  return element
}

function displayError(message) {
  const errorElement = document.getElementById('error-message')
  if (!errorElement) return

  errorElement.textContent = message
  errorElement.classList.remove('hidden')
}

function clearError() {
  const errorElement = document.getElementById('error-message')
  if (!errorElement) return

  errorElement.textContent = ''
  errorElement.classList.add('hidden')
}

// DOM Manipulation Functions
function addElementToDOM(elementId, text) {
  const element = document.getElementById(elementId)
  if (!element) return

  element.textContent = text
}

function removeElementFromDOM(elementId) {
  const element = document.getElementById(elementId)
  if (element) {
    element.remove()
  }
}

// -------------------------------
// User Behavior Simulation
// -------------------------------
function simulateClick(targetId, message) {
  clearError()
  addElementToDOM(targetId, message)
}

function handleFormSubmit(formId, targetId) {
  const input = document.getElementById('user-input')

  clearError()

  if (!input || input.value.trim() === '') {
    displayError('Input cannot be empty')
    return
  }

  addElementToDOM(targetId, input.value)
  input.value = ''
}

// -------------------------------
// Event Listeners
// -------------------------------
document.addEventListener('DOMContentLoaded', () => {
  const button = document.getElementById('simulate-click')
  const form = document.getElementById('user-form')

  if (button) {
    button.addEventListener('click', () => {
      simulateClick('dynamic-content', 'Button Clicked!')
    })
  }

  if (form) {
    form.addEventListener('submit', event => {
      event.preventDefault()
      handleFormSubmit('user-form', 'dynamic-content')
    })
  }
})

// Exports for Jest
module.exports = {
  addElementToDOM,
  removeElementFromDOM,
  simulateClick,
  handleFormSubmit
}
