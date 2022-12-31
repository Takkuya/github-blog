import { SearchPublicationsFormContainer, SearchInput } from './styles'
import * as zod from 'zod'
import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useContext } from 'react'
import { UserContext } from '../../../../components/contexts/UserContext'

const searchPublicationsFormSchema = zod.object({
  query: z.string(),
})

type SearchPublicationsInputs = zod.infer<typeof searchPublicationsFormSchema>

export const SearchPublicationsForm = () => {
  const { repositories, fetchPublications } = useContext(UserContext)
  const { register, watch } = useForm<SearchPublicationsInputs>({
    resolver: zodResolver(searchPublicationsFormSchema),
  })
  const query = watch('query')
  const publicationsQuantity = Object.keys(repositories).length

  async function handleSearchPublications(event: any) {
    if (event.key === 'Enter') {
      fetchPublications(query)
    }
  }

  return (
    <SearchPublicationsFormContainer>
      <header>
        <h2>Publicações</h2> <span>{publicationsQuantity} publicações</span>
      </header>
      <SearchInput
        type="text"
        placeholder="Buscar conteúdo"
        onKeyDown={handleSearchPublications}
        {...register('query')}
      />
    </SearchPublicationsFormContainer>
  )
}
