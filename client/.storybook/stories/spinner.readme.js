import React from 'react'
import {string} from 'prop-types'

const Readme = ({size, thickness}) => (
  <article>
    <h1>Spinner</h1>
    <p>
      The
      <code>Spinner</code>
      suggests that the user must wait for some action in the application.
    </p>
    <p>It is typically used when waiting for responses to requests over HTTP.</p>

    <h2>Props</h2>

    <h3><code>size</code></h3>
    <p>Control the size of the spinner.</p>
    <p>
      It is a string value and it can be either
      <code>tiny</code>
      ,
      <code>small</code>
      ,
      <code>normal</code>
      , or
      <code>big</code>
      .
    </p>
    <p>
      Its current value is
      <code>{size}</code>
      . You can change that using the knobs.
    </p>
    <p>
      Its default value is
      <code>normal</code>
      .
    </p>

    <h3><code>thickness</code></h3>
    <p>Control the thickness of the spinner.</p>
    <p>
      It is a string value and it can be either
      <code>thin</code>
      ,
      <code>normal</code>
      , or
      <code>thick</code>
      .
    </p>
    <p>
      Its current value is
      <code>{thickness}</code>
      . You can change that using the knobs.
    </p>
    <p>
      Its default value is
      <code>normal</code>
      .
    </p>
  </article>
)

Readme.proptypes = {
  size: string,
  thickness: string
}

export default Readme
