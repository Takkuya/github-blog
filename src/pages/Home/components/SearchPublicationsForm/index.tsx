import { SearchPublicationsFormContainer, SearchInput } from './styles'
import * as zod from 'zod'
import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { ChangeEvent, useCallback, useContext } from 'react'
import { UserContext } from '../../../../components/contexts/UserContext'
import { debounce } from 'lodash'

const searchPublicationsFormSchema = zod.object({
  query: z.string(),
})

type SearchPublicationsInputs = zod.infer<typeof searchPublicationsFormSchema>

export const SearchPublicationsForm = () => {
  const { repositories, fetchPublications } = useContext(UserContext)
  const { register } = useForm<SearchPublicationsInputs>({
    resolver: zodResolver(searchPublicationsFormSchema),
  })
  const publicationsQuantity = Object.keys(repositories).length

  const debounceSearch = useCallback(
    debounce((query) => fetchPublications(query), 500),
    [],
  )

  function handleSearch(event: ChangeEvent<HTMLInputElement>) {
    debounceSearch(event.target.value)
  }

  return (
    <SearchPublicationsFormContainer>
      <header>
        <h2>Publicações</h2> <span>{publicationsQuantity} publicações</span>
      </header>
      <SearchInput
        type="text"
        placeholder="Buscar conteúdo"
        {...register('query')}
        onChange={handleSearch}
      />
    </SearchPublicationsFormContainer>
  )
}
