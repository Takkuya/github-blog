import styled from 'styled-components'

export const PostCardContainer = styled.div`
  background: ${(props) => props.theme['base-profile']};
  border-radius: 10px;
  padding: 2rem;

  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;

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

  #title {
    margin-top: 0.75rem;
    font-size: 1.5rem;
    color: ${(props) => props.theme['base-title']};
  }

  footer {
    display: flex;
    align-items: center;
    gap: 2rem;
  }
`

export const Item = styled.span`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: ${(props) => props.theme['base-span']};

  svg {
    color: ${(props) => props.theme['base-label']};
    width: 1.125rem;
    height: 1.125rem;
  }
`
