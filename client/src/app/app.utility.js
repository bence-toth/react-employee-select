const getSuggestions = ({data, included}) => data.map(dataItem => ({
  ...dataItem,
  attributes: {
    ...dataItem.attributes,
    email: included
      .find(include => (include.id === dataItem.id))
      .attributes.email
  }
}))

// eslint-disable-next-line import/prefer-default-export
export {getSuggestions}
