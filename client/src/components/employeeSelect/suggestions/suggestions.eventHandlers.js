const onScroll = ({onFetchNextPage}) => (({target}) => {
  const {scrollTop, scrollHeight, offsetHeight} = target
  const distanceFromBottom = scrollHeight - (scrollTop + offsetHeight)
  const distanceFromEdgeThreshold = 10
  if (distanceFromBottom < distanceFromEdgeThreshold) {
    onFetchNextPage()
  }
})

// eslint-disable-next-line import/prefer-default-export
export {onScroll}
