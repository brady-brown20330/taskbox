import React from 'react';
import { action } from '@storybook/addon-actions';
import Header from './Header'

export default {
  title: 'Header',
  component: Header
};

export const Text = () => <Header onClick={action('clicked')}>Hello Header</Header>

export const Emoji = () => (
  <Header onClick={action('clicked')}>
    <span role='img' aria-label='wow so cool'>
      🤌 😎 🤌  
    </span>
  </Header>
)
