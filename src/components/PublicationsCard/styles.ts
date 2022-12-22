import styled from 'styled-components'

export const PublicationsContainer = styled.div`
  max-width: 26rem;
  padding: 2rem;

  background: ${(props) => props.theme['base-post']};

  display: flex;
  flex-direction: column;
  gap: 1.25rem;

  border-radius: 10px;

  transition: 0.2s all;

  border: 2px solid ${(props) => props.theme['base-post']};
  cursor: pointer;

  &:hover {
    border: 2px solid ${(props) => props.theme['base-label']};
  }

  header {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    gap: 1rem;

    h2 {
      font-size: 1.25rem;
      color: ${(props) => props.theme['base-title']};
    }

    span {
      white-space: nowrap;
      font-size: 0.75rem;
      color: ${(props) => props.theme['base-span']};
    }
  }
`
