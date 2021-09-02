/* eslint-disable @typescript-eslint/no-explicit-any */
import * as S from './styles'

function Pokeball(props: any) {
  return (
    <S.Ball>
      <S.Icon src={props.src} />
    </S.Ball>
  )
}
export default Pokeball
