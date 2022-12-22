import { PublicationsFormContainer, SearchInput } from './styles'

export const PublicationsForm = () => {
  return (
    <PublicationsFormContainer>
      <header>
        <h2>Publicações</h2> <span>6 publicações</span>
      </header>
      <SearchInput type="text" placeholder="Buscar conteúdo" />
    </PublicationsFormContainer>
  )
}
