/* eslint-disable import/no-extraneous-dependencies */
import {storiesOf} from '@storybook/react'
import {withKnobs} from '@storybook/addon-knobs'
// import {linkTo} from '@storybook/addon-links'
// import {Welcome} from '@storybook/react/demo'

import spinnerStories from './stories/spinner/spinner.stories'
import avatarStories from './stories/avatar/avatar.stories'
import employeeSelectStories from './stories/employeeSelect/employeeSelect.stories'

storiesOf('Spinner', module)
  .addDecorator(withKnobs)
  .add('Default', spinnerStories.defaultStory)

storiesOf('Avatar', module)
  .addDecorator(withKnobs)
  .add('Default', avatarStories.defaultStory)
  .add('With image', avatarStories.avatarImageStory)

storiesOf('EmployeeSelect', module)
  .addDecorator(withKnobs)
  .add('Default', employeeSelectStories.defaultStory)

// storiesOf('Welcome', module)
//   .add('to Storybook', () => <Welcome showApp={linkTo('Button')} />)
