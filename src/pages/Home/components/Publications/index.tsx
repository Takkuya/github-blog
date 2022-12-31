import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { UserContext } from '../../../../components/contexts/UserContext'
import { PublicationsCard } from '../../../../components/PublicationsCard'
import { SearchPublicationsForm } from '../SearchPublicationsForm'
import { PublicationsContainer, PublicationsGridWrapper } from './styles'

export const Publications = () => {
  const { repositories } = useContext(UserContext)
  const repositoriesArr = Object.values(repositories)

  const repositoriesQuantity = repositoriesArr.length

  return (
    <PublicationsContainer>
      <SearchPublicationsForm />

      <PublicationsGridWrapper repositoriesSize={repositoriesQuantity}>
        {repositoriesArr.length !== 0 ? (
          repositoriesArr.map((repository) => {
            return (
              <Link to={`/post/${repository.id}`} key={repository.id}>
                <PublicationsCard repository={repository} />
              </Link>
            )
          })
        ) : (
          <h4>Nenhum repositório encontrado</h4>
        )}
      </PublicationsGridWrapper>
    </PublicationsContainer>
  )
}
