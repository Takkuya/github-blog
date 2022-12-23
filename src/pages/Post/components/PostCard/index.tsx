import { faGithub } from '@fortawesome/free-brands-svg-icons'
import {
  faArrowUpRightFromSquare,
  faChevronLeft,
  faCalendar,
  faComment,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useContext, useEffect } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { UserContext } from '../../../../components/contexts/UserContext'
import { Item, PostCardContainer } from './styles'

export const PostCard = () => {
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

  const { title, comments } = repository

  return (
    <PostCardContainer>
      <header>
        <Link to="/">
          <FontAwesomeIcon icon={faChevronLeft} /> VOLTAR
        </Link>
        <a href="https://github.com/Takkuya">
          VER NO GITHUB <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
        </a>
      </header>
      <h2 id="title">{title}</h2>
      <footer>
        <Item>
          <FontAwesomeIcon icon={faGithub} />
          takkuya
        </Item>
        <Item>
          <FontAwesomeIcon icon={faCalendar} />
          Há 1 dia
        </Item>
        <Item>
          <FontAwesomeIcon icon={faComment} />
          {comments} comentários
        </Item>
      </footer>
    </PostCardContainer>
  )
}
