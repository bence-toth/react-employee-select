import {string, shape} from 'prop-types'

const employeeShape = shape({
  name: string.isRequired,
  id: string.isRequired,
  email: string.isRequired,
  avatar: string
})

export {employeeShape}
