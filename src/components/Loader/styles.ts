import styled from 'styled-components'

export const LoaderContainer = styled.div`
  width: 100%;
  background: ${(props) => props.theme['base-background']};
  width: 100vw;
  height: 100vh;

  position: absolute;
  z-index: 99;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;

  display: flex;
  align-items: center;
  justify-content: center;

  overflow-x: hidden;
`
