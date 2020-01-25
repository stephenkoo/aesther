import React from 'react'
import { render } from 'react-dom'
import { withA11y } from '@storybook/addon-a11y'
import { withInfo } from '@storybook/addon-info'
import { addDecorator, configure } from '@storybook/react'
import { GlobalStyle } from '../src/styles/global'

addDecorator(withInfo)
addDecorator(withA11y)

const loadStories = () => {
  /**
   * Add GlobalStyles to stories without re-mounting for each story.
   * https://github.com/storybookjs/storybook/issues/5578#issuecomment-494656470
   */
  const globalStyleElId = 'global-style'
  const globalStyleEl =
    document.querySelector(`#${globalStyleElId}`) ||
    (() => {
      const el = document.createElement('div')
      el.id = globalStyleElId
      document.head.append(el)
      return el
    })()

  render(<GlobalStyle />, globalStyleEl)
}

configure(loadStories, module)
