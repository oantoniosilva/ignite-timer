import styled from 'styled-components'

export const LayoutContainer = styled.div`
  max-width: 74rem; // 74 * 16 = 1184px o layout tem 1120px = 75rem. max-width menor p/ se trabalhar o padding.
  height: calc(100vh - 10rem);
  margin: 5rem auto;
  padding: 2.5rem;

  background: ${(props) => props.theme['gray-800']};
  border-radius: 8px;

  display: flex;
  flex-direction: column;
`
