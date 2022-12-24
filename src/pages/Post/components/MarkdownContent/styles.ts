import styled from 'styled-components'

export const MarkdownContentContainer = styled.div`
  margin-top: 2.5rem;
  padding: 0 2rem 0 2rem;

  a {
    text-decoration: underline;
    color: ${(props) => props.theme.blue};
  }

  p,
  a,
  h1,
  h2,
  h3,
  h4,
  h5,
  pre {
    margin-top: 1rem;
  }

  pre {
    background: ${(props) => props.theme['base-post']};
    padding: 1rem;
    border-radius: 2px;

    & > div {
      background: none !important;
      padding: 0 !important;
      margin: 0 !important;

      code {
        font-family: 'Fira Code', monospace !important;
        line-height: 160% !important;
      }
    }
  }
`
