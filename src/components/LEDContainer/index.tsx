import * as S from './styles'
import LED from 'components/LED'

const LEDContainer = () => (
  <S.Wrapper>
    <S.LEDPainel>
      <S.Light>
        <LED />
      </S.Light>
      <S.Light>
        <LED />
      </S.Light>
      <S.Light>
        <LED />
      </S.Light>
    </S.LEDPainel>
  </S.Wrapper>
)

export default LEDContainer
