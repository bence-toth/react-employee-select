import {string, shape} from 'prop-types'

const employeeShape = shape({
  attributes: {
    name: string.isRequired,
    id: string.isRequired,
    email: string.isRequired,
    avatar: string
  }.isRequired
})

export {employeeShape}
