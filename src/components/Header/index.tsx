import * as S from './styles'

const Header = () => (
  <S.Wrapper>
    <S.Logo src="img/pokeball.png" alt="Logo da franquia POKÉMON" />
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
