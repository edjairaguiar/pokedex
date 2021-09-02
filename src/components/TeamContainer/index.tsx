import * as S from './styles'
import TrainerProfile from 'components/TrainerProfile'
import PokemonTeamList from 'components/PokemonTeamList'

const TeamContainer = () => (
  <S.Wrapper>
    <PokemonTeamList />
    <TrainerProfile />
  </S.Wrapper>
)
export default TeamContainer
