import React from 'react'
import {string} from 'prop-types'

const Readme = ({
  name,
  avatarURL
}) => (
  <article>
    <h1>Avatar</h1>
    <p>
      The
      <code>Avatar</code>
      represents a user in the application.
    </p>
    <p>It is typically used together with the user name.</p>

    <h2>Props</h2>

    <h3><code>name</code></h3>
    <p>The full name of the user. Used for generating the monogram.</p>
    <p>This field is required.</p>
    <p>
      Its current value is
      <code>{name}</code>
      . You can change that using the knobs.
    </p>

    <h3><code>avatarURL</code></h3>
    <p>The URL for the picture of the user.</p>
    <p>The picture is expected to be a square.</p>
    <p>
      Its current value is
      <code>{avatarURL || 'undefined'}</code>
      . In some of the stories you can change that using the knobs.
    </p>
  </article>
)

Readme.propTypes = {
  name: string,
  avatarURL: string
}

export default Readme
