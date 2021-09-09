import * as S from './styles'
import Avatar from 'components/Avatar'

function PokemonTeam({ favPokemonSprite }: { favPokemonSprite: any }) {
  const favPokemonStaticList = ['']
  /* ALTERAÇÃO TEMPORÁRIA: 
  O vetor vazio 'favPokemonStaticList' serve 
  somente para renderizar a lista estaticamente no local host.
  A lista real é renderizada através de props passadas pelo Storybook.
  */

  if (!favPokemonSprite) {
    favPokemonSprite = favPokemonStaticList
  }

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
