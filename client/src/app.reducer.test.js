/* eslint-disable sonarjs/no-duplicate-string */
import each from 'mocha-each'

import {
  addSuggestions,
  clearSuggestions,
  selectEmployee,
  setFetchError,
  setNextPageFetching,
  setQueryFetching,
  updateQuery
} from './app.actionCreators'
import {reducer, initialState} from './app.reducer'

const runTests = ({startState, actions, expectedEndState}) => {
  const actionList = Array.isArray(actions) ? actions : [actions]
  const endState = actionList.reduce(
    (state, action) => reducer(state, action),
    startState
  )
  expect(endState).toEqual(expectedEndState)
}

describe('folderTreeResizable reducer unit tests_', () => {
  each([
    [
      'addSuggestions: should set state correctly on empty array',
      {
        ...initialState
      },
      addSuggestions({
        nextPageURL: 'http://some.url',
        suggestions: ['a', 'b', 'c'],
        totalSuggestionsForQuery: 42
      }),
      {
        ...initialState,
        nextPageURL: 'http://some.url',
        suggestions: ['a', 'b', 'c'],
        totalSuggestionsForQuery: 42
      }
    ],
    [
      'addSuggestions: should set state correctly on empty array',
      {
        ...initialState
      },
      [
        addSuggestions({
          nextPageURL: 'http://some.url?1',
          suggestions: ['a', 'b', 'c'],
          totalSuggestionsForQuery: 8
        }),
        addSuggestions({
          nextPageURL: 'http://some.url?2',
          suggestions: ['d', 'e', 'f'],
          totalSuggestionsForQuery: 8
        }),
        addSuggestions({
          nextPageURL: 'http://some.url?3',
          suggestions: ['g', 'h'],
          totalSuggestionsForQuery: 8
        })
      ],
      {
        ...initialState,
        nextPageURL: 'http://some.url?3',
        suggestions: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'],
        totalSuggestionsForQuery: 8
      }
    ],
    [
      'clearSuggestions: should set state correctly on error',
      {
        ...initialState,
        nextPageURL: 'http://some.url',
        suggestions: ['something'],
        totalSuggestionsForQuery: 35
      },
      clearSuggestions(),
      {
        ...initialState,
        nextPageURL: null,
        suggestions: null,
        totalSuggestionsForQuery: null
      }
    ],
    [
      'selectEmployee: should set state correctly on employee selection',
      {
        ...initialState,
        nextPageURL: 'http://some.url',
        selectedEmployee: null,
        suggestions: ['something'],
        totalSuggestionsForQuery: 35,
        query: 'X'
      },
      selectEmployee({employee: {some: 'object'}}),
      {
        ...initialState,
        selectedEmployee: {some: 'object'}
      }
    ],
    [
      'selectEmployee: should set state correctly on employee selection',
      {
        ...initialState,
        selectedEmployee: {some: 'object'}
      },
      selectEmployee({employee: null}),
      initialState
    ],
    [
      'setFetchError: should set state correctly on error',
      {
        ...initialState,
        isQueryFetching: true,
        suggestions: ['something']
      },
      setFetchError({hasError: true}),
      {
        ...initialState,
        hasFetchError: true,
        suggestions: []
      }
    ],
    [
      'setFetchError: should set state correctly back on success',
      {
        ...initialState,
        isQueryFetching: true,
        suggestions: ['something']
      },
      [
        setFetchError({hasError: true}),
        setFetchError({hasError: false})
      ],
      {
        ...initialState,
        suggestions: []
      }
    ],
    [
      'setNextPageFetching: should set state correctly on request',
      initialState,
      setNextPageFetching({isFetching: true}),
      {
        ...initialState,
        isNextPageFetching: true
      }
    ],
    [
      'setNextPageFetching: should set state correctly back on receive',
      initialState,
      [
        setNextPageFetching({isFetching: true}),
        setNextPageFetching({isFetching: false})
      ],
      initialState
    ],
    [
      'setQueryFetching: should set state correctly on request',
      {
        ...initialState,
        query: 'X'
      },
      setQueryFetching({isFetching: true}),
      {
        ...initialState,
        query: 'X',
        isQueryFetching: true
      }
    ],
    [
      'setQueryFetching: should set state correctly back on receive',
      {
        ...initialState,
        query: 'X'
      },
      [
        setQueryFetching({isFetching: true}),
        setQueryFetching({isFetching: false})
      ],
      {
        ...initialState,
        query: 'X'
      }
    ],
    [
      'updateQuery: should set query correctly',
      initialState,
      updateQuery({query: 'X'}),
      {
        ...initialState,
        query: 'X'
      }
    ],
    [
      'updateQuery: should set query correctly after multiple inputs',
      initialState,
      [
        updateQuery({query: 'X'}),
        updateQuery({query: 'Xy'}),
        updateQuery({query: 'Xyz'})
      ],
      {
        ...initialState,
        query: 'Xyz'
      }
    ]
  ])
    .it(
      '%s',
      (_, startState, actions, expectedEndState) =>
        runTests({
          startState,
          actions,
          expectedEndState
        })
    )
})
