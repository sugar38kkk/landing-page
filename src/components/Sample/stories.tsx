import Sample from './Sample'
import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'

export default {
  title: 'Components/Sample',
  component: Sample
} as ComponentMeta<typeof Sample>

const Template: ComponentStory<typeof Sample> = () => <Sample />

export const Primary = Template.bind({})
