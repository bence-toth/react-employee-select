import md5 from 'md5'

const generateMonogram = ({name}) => {
  const [firstName, lastName] = name.split(' ')
  const firstLetter = firstName.substring(0, 1)
  const secondLetter = lastName ? lastName.substring(0, 1) : ''
  return ` ${firstLetter}${secondLetter}`
}

const generateBackgroundColor = ({name}) => {
  const brandColorHueValue = 154
  const minDistanceFromBrandColor = 50
  const intervalLength = 360 - (2 * minDistanceFromBrandColor)
  const randomNumber = (parseInt(md5(name).slice(0, 4), 16)) % intervalLength
  const luckyNumber = (randomNumber < (brandColorHueValue - minDistanceFromBrandColor))
    ? randomNumber
    : randomNumber + (2 * minDistanceFromBrandColor)
  return `hsl(${luckyNumber}, 45%, 65%)` // HSL ❤
}

// eslint-disable-next-line import/prefer-default-export
export {generateMonogram, generateBackgroundColor}
