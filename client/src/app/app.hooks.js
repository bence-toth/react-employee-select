import {useRef, useEffect, useCallback} from 'react'

const useCounter = () => {
  const counterRef = useRef(0)
  const increaseCounter = () => {
    const newCounterValue = counterRef.current + 1
    counterRef.current = newCounterValue
    return newCounterValue
  }
  return [counterRef, increaseCounter]
}

const useDebounce = ({functionToDebounce, delay}, dependencies) => {
  const debounceTimeoutHandle = useRef(null)
  const debounce = (...args) => {
    clearTimeout(debounceTimeoutHandle.current)
    debounceTimeoutHandle.current = setTimeout(() => {
      debounceTimeoutHandle.current = null
      functionToDebounce(...args)
    }, delay)
  }
  const fetchEmployeeDataCallback = useCallback(
    () => debounce(),
    dependencies
  )
  useEffect(() => {
    fetchEmployeeDataCallback()
  }, [...dependencies, fetchEmployeeDataCallback])
  return fetchEmployeeDataCallback
}

const useLocale = ({localeData, userLocale}) => {
  // This would probably come from some context provider
  const userLocaleRef = useRef(userLocale)
  return localeData[userLocaleRef.current]
}

export {useCounter, useDebounce, useLocale}
