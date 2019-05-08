const roles = {
  suggestion: '[data-role=suggestion]',
  suggestions: '[data-role=suggestions]',
  employeeSelect: '[data-role=employeeSelect]',
  queryInput: '[data-role=queryInput]'
}

const onMouseMove = ({target}) => {
  const {scrollTop, offsetHeight: containerHeight} = target.closest(roles.suggestions)
  const {offsetTop, offsetHeight: elementHeight} = target.closest(roles.suggestion)
  const elementMiddle = offsetTop + (elementHeight * 0.5)
  const isWithinViewport = (scrollTop <= elementMiddle)
    && ((scrollTop + containerHeight) >= elementMiddle)
  if (isWithinViewport) {
    target.focus()
  }
}

const onArrowDown = ({target}) => {
  const {suggestion} = roles
  const nextSuggestion = target.closest(suggestion).nextSibling
  if (nextSuggestion) {
    nextSuggestion.querySelector('button').focus()
  }
}

const onArrowUp = ({target}) => {
  const {suggestion, employeeSelect, queryInput} = roles
  const previousSuggestion = target.closest(suggestion).previousSibling
  if (previousSuggestion) {
    previousSuggestion.querySelector('button').focus()
  }
  else {
    const query = target.closest(employeeSelect).querySelector(queryInput)
    query.focus()
  }
}

const onKeyDown = ({target, key}) => {
  if (key === 'ArrowDown') {
    onArrowDown({target})
  }
  if (key === 'ArrowUp') {
    onArrowUp({target})
  }
}

export {onMouseMove, onKeyDown}