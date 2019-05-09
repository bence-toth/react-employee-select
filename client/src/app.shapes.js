/* eslint-disable function-paren-newline */
import {string, arrayOf, objectOf, oneOfType, shape, func} from 'prop-types'

const employeeShape = shape({
  attributes: {
    name: string.isRequired,
    id: string.isRequired,
    email: string.isRequired,
    avatar: string
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
