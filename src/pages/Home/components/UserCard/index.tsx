import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { ContentWrapper, ImageWrapper, Item, UserCardContainer } from './styles'
import {
  faArrowUpRightFromSquare,
  faBuilding,
  faUserGroup,
} from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { useContext } from 'react'
import { UserContext } from '../../../../components/contexts/UserContext'

export const UserCard = () => {
  const { user } = useContext(UserContext)
  const { name, followers, bio, login, company } = user

  return (
    <UserCardContainer>
      <ImageWrapper>
        <img
          src="https://avatars.githubusercontent.com/u/56007750?v=4"
          alt=""
        />
      </ImageWrapper>
      <ContentWrapper>
        <header>
          <h2>{name}</h2>
          <a href="https://github.com/Takkuya">
            GITHUB <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
          </a>
        </header>
        <span className="content">{bio}</span>
        <footer>
          <Item>
            <FontAwesomeIcon icon={faGithub} />
            {login}
          </Item>
          {company !== null ? (
            <Item>
              <FontAwesomeIcon icon={faBuilding} />
              {company}
            </Item>
          ) : null}

          <Item>
            <FontAwesomeIcon icon={faUserGroup} />
            {followers} seguidores
          </Item>
        </footer>
      </ContentWrapper>
    </UserCardContainer>
  )
}
