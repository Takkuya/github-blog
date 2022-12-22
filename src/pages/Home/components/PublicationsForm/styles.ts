import styled from 'styled-components'

export const PublicationsFormContainer = styled.div`
  margin-top: 4.5rem;

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;

    h2 {
      font-size: 1.125rem;
      line-height: 1.6;
      color: ${(props) => props.theme['base-subtitle']};
    }

    span {
      color: ${(props) => props.theme['base-span']};
    }
  }
`

export const SearchInput = styled.input`
  width: 100%;

  margin-top: 0.75rem;

  padding: 0.75rem 1rem;
  border-radius: 6px;
  background: ${(props) => props.theme['base-input']};
  border: 1px solid ${(props) => props.theme['base-order']};

  color: ${(props) => props.theme['base-text']};

  &::placeholder {
    color: ${(props) => props.theme['base-label']};
  }
`
