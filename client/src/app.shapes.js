/* eslint-disable function-paren-newline */
import {string, arrayOf, objectOf, oneOfType, shape, func} from 'prop-types'

const employeeShape = shape({
  attributes: {
    avatar: string,
    email: string.isRequired,
    id: string.isRequired,
    name: string.isRequired
  }.isRequired
})

const copyShape = objectOf(
  oneOfType([
    string,
    arrayOf(string),
    func
  ])
)

export {employeeShape, copyShape}
