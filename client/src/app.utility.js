// I know I should rather keep this in the component,
// but I am only debouncing one function
// eslint-disable-next-line fp/no-let
let timeout

const debounce = (functionToDebounce, delay) => (
  (...args) => {
    clearTimeout(timeout)
    timeout = setTimeout(() => {
      timeout = null
      functionToDebounce(...args)
    }, delay)
  }
)

export {debounce}
