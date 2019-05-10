const calculateBorderWidth = ({thickness}) => ({
  thin: 2,
  normal: 3,
  thick: 4
}[thickness])

const calculateDimensions = ({size}) => ({
  tiny: 15,
  small: 22.5,
  big: 45,
  normal: 30
}[size])

const calculateStyle = ({size, thickness}) => ({
  borderWidth: calculateBorderWidth({thickness}),
  height: calculateDimensions({size}),
  width: calculateDimensions({size})
})

export {calculateStyle}
