import md5 from 'md5'

const generateMonogram = ({name}) => {
  const [firstName, lastName] = name.split(' ')
  const firstLetter = firstName.substring(0, 1)
  const secondLetter = lastName ? lastName.substring(0, 1) : ''
  return `${firstLetter}${secondLetter}`
}

const generateBackgroundColor = ({name}) => {
  // This function generates an HSL color based on the name.
  // It's kinda random, but it's deterministic at the same time.
  // I have tests to prove the latter, and I need you to believe me on the former.
  const brandColorHueValue = 154
  const minDistanceFromBrandColor = 50 // Plot twist: Let's not get very close to the brand color
  const intervalLength = 360 - (2 * minDistanceFromBrandColor)
  const randomNumber = (parseInt(md5(name).slice(0, 4), 16)) % intervalLength // Chebyshev polynomials!
  const luckyNumber = (randomNumber < (brandColorHueValue - minDistanceFromBrandColor))
    ? randomNumber
    : randomNumber + (2 * minDistanceFromBrandColor)
  return `hsl(${luckyNumber}, 45%, 65%)` // I ❤ HSL
}

// eslint-disable-next-line import/prefer-default-export
export {generateMonogram, generateBackgroundColor}
