import * as S from './styles'

const Header = () => (
  <S.Wrapper>
    <S.Logo src="img/pokeball.png" alt="Logo da franquia POKÉMON" />
    <S.List>
      <S.Link href="#">Início</S.Link>
      <S.Link href="#">Sair</S.Link>
    </S.List>
  </S.Wrapper>
)

export default Header
