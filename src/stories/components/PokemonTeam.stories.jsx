import React from 'react'
import PokemonTeam from '../../components/PokemonTeam'

export default {
  title: 'Components/PokemonTeam',
  component: PokemonTeam,
  argTypes: {
    favPokemonSprite: {
      name: 'Time'
    }
  }
}

const Template = (args) => <PokemonTeam {...args} />

export const Default = Template.bind({})
Default.args = {
  favPokemonSprite: [
    {
      id: '1',
      imgLink:
        'https://img.pokemondb.net/sprites/black-white/anim/normal/pikachu.gif'
    },
    {
      id: '2',
      imgLink: ''
    },
    {
      id: '3',
      imgLink: ''
    },
    {
      id: '4',
      imgLink: ''
    },
    {
      id: '5',
      imgLink: ''
    },

    {
      id: '6',
      imgLink: ''
    }
  ]
}
