import * as S from './styles'
import Logo from 'components/Logo'
import TrainerProfile from 'components/TrainerProfile'

const Header = () => (
  <S.Navigation>
    <a href="#">
      <Logo />
    </a>
    <a href="#">
      <TrainerProfile />
    </a>
  </S.Navigation>
)

export default Header
