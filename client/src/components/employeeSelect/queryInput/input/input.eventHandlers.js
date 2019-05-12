const roles = {
  suggestion: '[data-role=suggestion]',
  suggestions: '[data-role=suggestions]',
  employeeSelect: '[data-role=employeeSelect]'
}

const onArrowDown = ({target}) => {
  const {suggestion, suggestions, employeeSelect} = roles
  const allSuggestions = target.closest(employeeSelect).querySelector(suggestions)
  const firstSuggestion = allSuggestions && allSuggestions.querySelector(suggestion)
  if (firstSuggestion) { // Focus the first suggestion
    firstSuggestion.querySelector('button').focus()
  }
}

const onKeyDown = event => {
  const {target, key} = event
  if (key === 'ArrowDown') {
    event.preventDefault()
    onArrowDown({target})
  }
  if (key === 'Enter') {
    // In case somebody would boldly put this component inside a <form>
    event.preventDefault()
  }
}

// eslint-disable-next-line import/prefer-default-export
export {onKeyDown}
