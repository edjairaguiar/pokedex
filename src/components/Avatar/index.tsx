import * as S from './styles'

function Avatar(props: any) {
  return (
    <S.Ball>
      <S.Icon src={props.src} />
    </S.Ball>
  )
}
export default Avatar
