import LED from '../assets/LED'
import * as S from './styles'

const Footer = () => (
  <S.Wrapper>
    <S.LEDContainer>
      <S.LEDPanel>
        <S.LEDLight>
          <LED />
        </S.LEDLight>
        <S.LEDLight>
          <LED />
        </S.LEDLight>
        <S.LEDLight>
          <LED />
        </S.LEDLight>
      </S.LEDPanel>
    </S.LEDContainer>
  </S.Wrapper>
)
export default Footer
