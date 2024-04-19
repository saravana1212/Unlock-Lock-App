// Write your code here
import {useState} from 'react'

import {
  UnlockLockContainer,
  ImageAndTextContainer,
  Image,
  Text,
  Button,
} from './styledComponents'

const Unlock = () => {
  const [isUnlocked, setIsUnlocked] = useState(true)

  const imageUrl = isUnlocked
    ? 'https://assets.ccbp.in/frontend/hooks/lock-img.png'
    : 'https://assets.ccbp.in/frontend/hooks/unlock-img.png'
  const altText = isUnlocked ? 'lock' : 'unlock'
  const text = isUnlocked ? 'Your Device is Locked' : 'Your Device is Unlocked'
  const buttonText = isUnlocked ? 'Unlock' : 'lock'

  const onClickButton = () => setIsUnlocked(prevState => !prevState)

  return (
    <UnlockLockContainer>
      <ImageAndTextContainer>
        <Image src={imageUrl} alt={altText} />
        <Text>{text}</Text>
      </ImageAndTextContainer>
      <Button type="button" onClick={onClickButton}>
        {buttonText}
      </Button>
    </UnlockLockContainer>
  )
}
export default Unlock
