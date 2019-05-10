const suggestions = [ // Mock and roll ♫ ♪
  {
    attributes: {
      id: '1',
      name: 'Mathew Sullivan',
      email: '',
      avatar: 'https://randomuser.me/api/portraits/men/49.jpg'
    }
  },
  {
    attributes: {
      id: '2',
      name: 'Iris Fernandez',
      email: 'iris.fernandez@peakon.com',
      avatar: null
    }
  },
  {
    attributes: {
      id: '3',
      name: 'Ian Robertson',
      email: 'ian.robertson@peakon.com',
      avatar: null
    }
  },
  {
    attributes: {
      id: '4',
      name: 'Eileen Marshall',
      email: 'eileen.marshall@peakon.com',
      avatar: 'https://randomuser.me/api/portraits/women/71.jpg'
    }
  },
  {
    attributes: {
      id: '5',
      name: 'Claudia Cole',
      email: 'claudia.cole@peakon.com',
      avatar: null
    }
  },
  {
    attributes: {
      id: '6',
      name: 'Charlie Woods',
      email: 'charlie.woods@peakon.com',
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
