import * as S from './styles'
import Avatar from 'components/Avatar'

function PokemonTeam({ favPokemonSprite }: { favPokemonSprite: any }) {
  return (
    <S.Wrapper>
      <S.TeamList>
        {favPokemonSprite.map((FavPoke: any) => (
          <S.PokemonFromTeam key={FavPoke.id}>
            <Avatar src={FavPoke.imgLink} />
          </S.PokemonFromTeam>
        ))}
      </S.TeamList>
    </S.Wrapper>
  )
}

export default PokemonTeam
