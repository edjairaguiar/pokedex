import * as S from './styles'
import Logo from '../Logo'

const Header = () => (
  <S.Wrapper>
    <Logo />
    <S.Navigation>
      <S.Item>
        <S.Link href="#">Início</S.Link>
      </S.Item>
      <S.Item>
        <S.Link href="#">Sair</S.Link>
      </S.Item>
    </S.Navigation>
  </S.Wrapper>
)

export default Header
