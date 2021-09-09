import * as S from './styles'
import Avatar from 'components/Avatar'

function TrainerProfile({ avatarLink }: { avatarLink: string }) {
  return (
    <S.Trainer>
      <Avatar src={avatarLink} />
    </S.Trainer>
  )
}

export default TrainerProfile
