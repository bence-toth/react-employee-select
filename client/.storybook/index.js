/* eslint-disable import/no-extraneous-dependencies */
import {storiesOf} from '@storybook/react'
import {withKnobs} from '@storybook/addon-knobs'
// import {linkTo} from '@storybook/addon-links'
// import {Welcome} from '@storybook/react/demo'

import spinnerStories from './stories/spinner.stories'

storiesOf('Spinner', module)
  .addDecorator(withKnobs)
  .add('Default', spinnerStories.defaultStory)

// storiesOf('Welcome', module)
//   .add('to Storybook', () => <Welcome showApp={linkTo('Button')} />)
