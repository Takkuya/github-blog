import { PublicationsCard } from '../../../../components/PublicationsCard'
import { PublicationsForm } from '../PublicationsForm'
import { PublicationsContainer, PublicationsGridWrapper } from './styles'

export const Publications = () => {
  return (
    <PublicationsContainer>
      <PublicationsForm />

      <PublicationsGridWrapper>
        <PublicationsCard />
        <PublicationsCard />
        <PublicationsCard />
        <PublicationsCard />
      </PublicationsGridWrapper>
    </PublicationsContainer>
  )
}
