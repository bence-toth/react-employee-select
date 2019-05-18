import {useRef, useEffect, useCallback} from 'react'

const useCounter = () => {
  const counterRef = useRef(0)
  const increaseCounter = () => {
    const newCounterValue = counterRef.current + 1
    counterRef.current = newCounterValue
    return newCounterValue
  }
  return [counterRef.current, increaseCounter]
}

const useDebounce = (functionToDebounce, delay, dependencies) => {
  const debounceTimeoutHandle = useRef(null)
  const debounce = () => {
    clearTimeout(debounceTimeoutHandle.current)
    debounceTimeoutHandle.current = setTimeout(() => {
      debounceTimeoutHandle.current = null
      functionToDebounce()
    }, delay)
  }
  const callback = useCallback(
    () => debounce(),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    dependencies
  )
  useEffect(() => {
    callback()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [...dependencies, callback])
  return callback
}

const useLocale = ({localeData, userLocale}) => {
  // This would probably come from some context provider
  const userLocaleRef = useRef(userLocale)
  return localeData[userLocaleRef.current]
}

export {useCounter, useDebounce, useLocale}
