import styled, { css } from 'styled-components'

export const UserCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;

  background: ${(props) => props.theme['base-profile']};
  border-radius: 10px;
  padding: 2rem;

  box-shadow: 0px 2px 28px 1px rgba(0, 0, 0, 0.2);

  ${({ theme: { breakpoints } }) => css`
    @media (min-width: ${breakpoints.lg}) {
      flex-direction: row;
    }
  `}
`

export const ImageWrapper = styled.div`
  img {
    width: 9.25rem;
    height: 9.25rem;
    border-radius: 8px;
  }
`

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  width: 100%;

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;

    h2 {
      color: ${(props) => props.theme['base-title']};
      font-size: 1.5rem;
    }

    a {
      display: flex;
      align-items: center;
      gap: 0.5rem;

      color: ${(props) => props.theme.blue};
      font-weight: bold;
      font-size: 0.75rem;

      text-decoration: none;
    }
  }

  .content {
    line-height: 1.6;
  }

  footer {
    margin-top: 1rem;

    display: flex;
    align-items: center;
    gap: 1.5rem;
  }
`

export const Item = styled.span`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: ${(props) => props.theme['base-subtitle']};

  svg {
    color: ${(props) => props.theme['base-label']};
    width: 1.125rem;
    height: 1.125rem;
  }
`
