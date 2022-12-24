import styled from 'styled-components'

export const PublicationsContainer = styled.div`
  max-width: 26rem;
  padding: 2rem;
  width: 100%;
  height: 100%;

  background: ${(props) => props.theme['base-post']};

  display: flex;
  flex-direction: column;
  gap: 1.25rem;

  border-radius: 10px;

  transition: 0.2s all;

  border: 2px solid ${(props) => props.theme['base-post']};
  cursor: pointer;

  line-height: 1.6;

  max-height: 300px;

  &:hover {
    border: 2px solid ${(props) => props.theme['base-label']};
  }

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;

    h2 {
      font-size: 1.25rem;
      color: ${(props) => props.theme['base-title']};
    }

    time {
      white-space: nowrap;
      font-size: 0.8rem;
      color: ${(props) => props.theme['base-span']};
    }
  }

  a {
    display: inline-block;
    text-decoration: underline;
    color: ${(props) => props.theme.blue};
  }
`
export const Content = styled.div`
  p,
  a,
  h1,
  h2,
  h3,
  h4,
  h5,
  pre {
    margin-top: 0.5rem;
  }

  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 4;
`
