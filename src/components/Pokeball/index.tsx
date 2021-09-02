import * as S from './styles'

function Pokeball(props) {
  return (
    <S.Ball>
      <S.Icon src={props.src} />
    </S.Ball>
  )
}
export default Pokeball
