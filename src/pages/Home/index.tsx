import { Publications } from './components/Publications'
import { UserCard } from './components/UserCard'
import { HomeContainer } from './styles'

export const Home = () => {
  return (
    <HomeContainer>
      <UserCard />
      <Publications />
    </HomeContainer>
  )
}
