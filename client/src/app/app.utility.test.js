/* eslint-disable sonarjs/no-duplicate-string */
import {getSuggestions} from './app.utility'

describe('App utility tests_', () => {
  const data = [
    {
      id: '102',
      attributes: {
        name: 'Ariel Johnston',
        avatar: null
      }
    },
    {
      id: '420',
      attributes: {
        name: 'Irene Johnson',
        avatar: null
      }
    },
    {
      id: '509',
      attributes: {
        name: 'John Madden',
        avatar: null
      }
    },
    {
      id: '510',
      attributes: {
        name: 'Johnathon Haas',
        avatar: null
      }
    },
    {
      id: '511',
      attributes: {
        name: 'Johnny Moyer',
        avatar: null
      }
    }
  ]
  const included = [
    {
      id: '102',
      attributes: {
        email: 'ariel.johnston@example.com'
      }
    },
    {
      id: '420',
      attributes: {
        email: 'irene.johnson@example.com'
      }
    },
    {
      id: '509',
      attributes: {
        email: 'john.madden@example.com'
      }
    },
    {
      id: '510',
      attributes: {
        email: 'johnathon.haas@example.com'
      }
    },
    {
      id: '511',
      attributes: {
        email: 'johnny.moyer@example.com'
      }
    }
  ]
  const expectedOutput = [
    {
      id: '102',
      attributes: {
        name: 'Ariel Johnston',
        avatar: null,
        email: 'ariel.johnston@example.com'
      }
    },
    {
      id: '420',
      attributes: {
        name: 'Irene Johnson',
        avatar: null,
        email: 'irene.johnson@example.com'
      }
    },
    {
      id: '509',
      attributes: {
        name: 'John Madden',
        avatar: null,
        email: 'john.madden@example.com'
      }
    },
    {
      id: '510',
      attributes: {
        name: 'Johnathon Haas',
        avatar: null,
        email: 'johnathon.haas@example.com'
      }
    },
    {
      id: '511',
      attributes: {
        name: 'Johnny Moyer',
        avatar: null,
        email: 'johnny.moyer@example.com'
      }
    }
  ]

  it('getSuggestions() - array order is the same', () => {
    const actualOutput = getSuggestions({data, included})
    expect(actualOutput).toEqual(expectedOutput)
  })

  it('getSuggestions() array order is different', () => {
    const [e1, e2, e3, e4, e5] = included
    const scrambledIncluded = [e4, e1, e3, e2, e5]
    const actualOutput = getSuggestions({data, included: scrambledIncluded})
    expect(actualOutput).toEqual(expectedOutput)
  })
})
