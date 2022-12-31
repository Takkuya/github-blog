import { LoaderContainer } from './styles'
import { Ring } from '@uiball/loaders'
import theme from '../../styles/themes/default'

export const Loader = () => {
  return (
    <LoaderContainer>
      <Ring size={70} lineWeight={4} speed={2} color={theme['base-label']} />
    </LoaderContainer>
  )
}
