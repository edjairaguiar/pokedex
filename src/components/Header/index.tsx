import * as S from './styles'
import AnimationImage from 'components/AnimationImage'
import TrainerProfile from 'components/TrainerProfile'

const Header = () => (
  <S.Navigation>
    <a href="#">
      <AnimationImage />
    </a>
    <a href="#">
      <TrainerProfile avatarLink={''} />
    </a>
  </S.Navigation>
)

export default Header
