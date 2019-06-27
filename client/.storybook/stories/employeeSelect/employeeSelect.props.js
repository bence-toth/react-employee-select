const suggestions = [ // Mock and roll ♫ ♪
  {
    id: '1',
    attributes: {
      name: 'Mathew Sullivan',
      email: '',
      avatar: 'https://randomuser.me/api/portraits/men/49.jpg'
    }
  },
  {
    id: '2',
    attributes: {
      name: 'Iris Fernandez',
      email: 'iris.fernandez@example.com',
      avatar: null
    }
  },
  {
    id: '3',
    attributes: {
      name: 'Ian Robertson',
      email: 'ian.robertson@example.com',
      avatar: null
    }
  },
  {
    id: '4',
    attributes: {
      name: 'Eileen Marshall',
      email: 'eileen.marshall@example.com',
      avatar: 'https://randomuser.me/api/portraits/women/71.jpg'
    }
  },
  {
    id: '5',
    attributes: {
      name: 'Claudia Cole',
      email: 'claudia.cole@example.com',
      avatar: null
    }
  },
  {
    id: '6',
    attributes: {
      name: 'Charlie Woods',
      email: 'charlie.woods@example.com',
      avatar: null
    }
  }
]

const copy = {
  employeeFetchError: [
    'Something went terribly wrong.',
    'We are so sorry! Maybe try another name?'
  ],
  employeeNoQueryResults: [
    'There are no matches.',
    'Are you sure you got the right name?'
  ],
  employeeSelectPlaceholder: 'Select employee'
}

export {suggestions, copy}
