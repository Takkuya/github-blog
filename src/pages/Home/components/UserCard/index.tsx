import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { ContentWrapper, ImageWrapper, Item, UserCardContainer } from './styles'
import {
  faArrowUpRightFromSquare,
  faBuilding,
  faUserGroup,
} from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

export const UserCard = () => {
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
          <h2>Gabriel Takuya Yamamoto</h2>
          <a href="https://github.com/Takkuya">
            GITHUB <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
          </a>
        </header>
        <span className="content">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
          vitae iste saepe incidunt labore accusamus expedita fugit sequi
          delectus, aliquam quasi officiis nam minus quidem autem esse animi
          facere facilis.
        </span>
        <footer>
          <Item>
            <FontAwesomeIcon icon={faGithub} />
            takkuya
          </Item>
          <Item>
            <FontAwesomeIcon icon={faBuilding} />
            Euthymia Code
          </Item>
          <Item>
            <FontAwesomeIcon icon={faUserGroup} />
            123 seguidores
          </Item>
        </footer>
      </ContentWrapper>
    </UserCardContainer>
  )
}
