import { useContext } from 'react'
import { UserContext } from '../../components/contexts/UserContext'
import { Loader } from '../../components/Loader'
import { Publications } from './components/Publications'
import { UserCard } from './components/UserCard'
import { HomeContainer } from './styles'

export const Home = () => {
  const { isLoading } = useContext(UserContext)

  return (
    <HomeContainer>
      {!isLoading ? (
        <>
          <UserCard />
          <Publications />
        </>
      ) : (
        <Loader />
      )}
    </HomeContainer>
  )
}
