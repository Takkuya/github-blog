import styled, { css } from 'styled-components'

export const PublicationsContainer = styled.div``

export const PublicationsGridWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;

  margin-top: 3rem;

  ${({ theme: { breakpoints } }) => css`
    @media (min-width: ${breakpoints.md}) {
      display: grid;
      gap: 2rem;
      grid-template-columns: repeat(2, 1fr);
    }
  `}
`
