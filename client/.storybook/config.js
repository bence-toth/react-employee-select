import {configure} from '@storybook/react'

const loadStories = () => {
  // eslint-disable-next-line global-require
  require('./index.js')
}

configure(loadStories, module)
