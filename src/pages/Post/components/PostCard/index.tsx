import { faGithub } from '@fortawesome/free-brands-svg-icons'
import {
  faArrowUpRightFromSquare,
  faChevronLeft,
  faCalendar,
  faComment,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'
import { Item, PostCardContainer } from './styles'

export const PostCard = () => {
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
      <h2 id="title">JavaScript VS TypeScript. Differences</h2>
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
          <FontAwesomeIcon icon={faComment} />7 comentários
        </Item>
      </footer>
    </PostCardContainer>
  )
}
