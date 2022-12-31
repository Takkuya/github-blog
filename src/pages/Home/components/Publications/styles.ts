import styled, { css } from 'styled-components'

export const PublicationsContainer = styled.div``

type PublicationsGridWrapperProps = {
  repositoriesSize: number
}

export const PublicationsGridWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  text-decoration: none;

  margin-top: 3rem;

  a {
    height: 100%;
    width: 100%;
    text-decoration: none;
    color: ${(props) => props.theme['base-text']};

    display: flex;
    align-items: center;
    justify-content: center;
  }

  ${({ theme: { breakpoints } }) => css<PublicationsGridWrapperProps>`
    @media (min-width: ${breakpoints.md}) {
      display: grid;
      gap: 2rem;
      grid-template-columns: ${(props) =>
        props.repositoriesSize !== 0 ? 'repeat(2, 1fr)' : 'repeat(1, 1fr)'};
      text-align: ${(props) =>
        props.repositoriesSize !== 0 ? 'left' : 'center'};
    }
  `}
`
