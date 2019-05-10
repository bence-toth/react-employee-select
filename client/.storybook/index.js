/* eslint-disable import/no-extraneous-dependencies */
import {storiesOf} from '@storybook/react'
import {withKnobs} from '@storybook/addon-knobs'

import spinnerStories from './stories/spinner/spinner.stories'
import avatarStories from './stories/avatar/avatar.stories'
import employeeSelectStories from './stories/employeeSelect/employeeSelect.stories'

storiesOf('Spinner', module)
  .addDecorator(withKnobs)
  .add('Default', spinnerStories.main)

storiesOf('Avatar', module)
  .addDecorator(withKnobs)
  .add('Default', avatarStories.main)
  .add('With image', avatarStories.avatarImage)

storiesOf('EmployeeSelect', module)
  .addDecorator(withKnobs)
  .add('Default', employeeSelectStories.main)
  .add('Fetching', employeeSelectStories.fetching)
  .add('Suggestions', employeeSelectStories.receivedSuggestions)
  .add('Fetching next page', employeeSelectStories.fetchingNextPage)
  .add('Selected employee', employeeSelectStories.selectedEmployee)
  .add('No results', employeeSelectStories.noResults)
  .add('Network error', employeeSelectStories.networkError)
