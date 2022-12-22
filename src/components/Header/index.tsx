import { BackgroundImg, HeaderContainer, Logo } from './styles'
import logoImg from '../../assets/Logo.svg'
import backgroundImg from '../../assets/Cover.png'

export const Header = () => {
  return (
    <HeaderContainer>
      <BackgroundImg src={backgroundImg} alt="" />
      <Logo src={logoImg} alt="" />
    </HeaderContainer>
  )
}
