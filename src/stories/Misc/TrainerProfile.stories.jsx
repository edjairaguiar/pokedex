import React from 'react'
import TrainerProfile from '../../components/TrainerProfile'

export default {
  title: 'Misc/TrainerProfile',
  component: TrainerProfile,
  argTypes: {
    avatarLink: {
      name: 'Link da imagem'
    }
  }
}

const Template = (args) => <TrainerProfile {...args} />

export const Default = Template.bind({})
Default.args = {
  avatarLink:
    'http://31.media.tumblr.com/088786d466c3a315d6043b8e59d96770/tumblr_msu2ojWkqz1scncwdo1_500.gif'
}
