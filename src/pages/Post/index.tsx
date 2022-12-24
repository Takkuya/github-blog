import { useContext, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { UserContext } from '../../components/contexts/UserContext'
import { MarkdownContent } from './components/MarkdownContent'
import { PostCard } from './components/PostCard'
import { PostContainer } from './styles'

export const Post = () => {
  const { repositories } = useContext(UserContext)
  // se o valor for vazio retorna uma string vazia
  const { id = '' } = useParams()
  const navigate = useNavigate()

  const repository = repositories[id]

  useEffect(() => {
    // se o valor não existe, if not repository basicamente
    if (!repository) {
      navigate('/')
    }
  })

  if (!repository) {
    return null
  }

  const { title, comments, body } = repository

  return (
    <PostContainer>
      <PostCard title={title} comments={comments} />
      <MarkdownContent body={body} />
    </PostContainer>
  )
}
