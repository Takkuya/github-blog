import styled, { css } from 'styled-components'

export const HomeContainer = styled.main`
  max-width: 54rem;
  margin: 0 auto;

  margin-top: -5.875rem;
  margin-bottom: 15rem;

  z-index: 10;

  padding: 1.5rem;

  ${({ theme: { breakpoints } }) => css`
    @media (min-width: ${breakpoints.md}) {
      padding: 0;
    }
  `}
`
