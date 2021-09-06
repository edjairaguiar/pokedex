import * as S from './styles'
import Avatar from 'components/Avatar'

const PokemonTeam = () => {
  const FavPokeSpriteList = [
    {
      id: 1,
      imgLink:
        'https://projectpokemon.org/images/sprites-models/bw-animated/003.gif'
    },
    {
      id: 2,
      imgLink:
        'https://projectpokemon.org/images/sprites-models/bw-animated/059.gif'
    },
    {
      id: 3,
      imgLink:
        'https://projectpokemon.org/images/sprites-models/bw-animated/125.gif'
    },
    {
      id: 4,
      imgLink:
        'https://projectpokemon.org/images/sprites-models/bw-animated/094.gif'
    },
    {
      id: 5,
      imgLink:
        'https://projectpokemon.org/images/sprites-models/bw-animated/137.gif'
    },

    {
      id: 6,
      imgLink:
        'https://projectpokemon.org/images/sprites-models/bw-animated/131.gif'
    }
  ]

  return (
    <S.Wrapper>
      <S.TeamList>
        {FavPokeSpriteList.map((FavPoke: any) => (
          <S.PokemonFromTeam key={FavPoke.id}>
            <Avatar src={FavPoke.imgLink} />
          </S.PokemonFromTeam>
        ))}
      </S.TeamList>
    </S.Wrapper>
  )
}

export default PokemonTeam
