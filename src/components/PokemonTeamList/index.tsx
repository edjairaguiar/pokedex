import * as S from './styles'
import Pokeball from 'components/Pokeball'

const PokemonTeamList = () => (
  <S.TeamList>
    <S.PokemonFromTeam>
      <Pokeball src="https://projectpokemon.org/images/sprites-models/bw-animated/003.gif" />
    </S.PokemonFromTeam>
    <S.PokemonFromTeam>
      <Pokeball src="https://projectpokemon.org/images/sprites-models/bw-animated/059.gif" />
    </S.PokemonFromTeam>
    <S.PokemonFromTeam>
      <Pokeball src="https://projectpokemon.org/images/sprites-models/bw-animated/125.gif" />
    </S.PokemonFromTeam>
    <S.PokemonFromTeam>
      <Pokeball src="https://projectpokemon.org/images/sprites-models/bw-animated/094.gif" />
    </S.PokemonFromTeam>
    <S.PokemonFromTeam>
      <Pokeball src="https://projectpokemon.org/images/sprites-models/bw-animated/137.gif" />
    </S.PokemonFromTeam>
    <S.PokemonFromTeam>
      <Pokeball src="https://projectpokemon.org/images/sprites-models/bw-animated/131.gif" />
    </S.PokemonFromTeam>
  </S.TeamList>
)
export default PokemonTeamList
