import { useContext } from 'react'
import { Outlet } from 'react-router-dom'
import { UserContext } from '../../components/contexts/UserContext'
import { Header } from '../../components/Header'

export const DefaultLayout = () => {
  const { isLoading } = useContext(UserContext)

  return (
    <>
      {!isLoading ? <Header /> : null}
      <Outlet />
    </>
  )
}
