import styled from '@emotion/styled'

export const activeStyle = 'background-size: 100% 100%'

const Underline = styled.span`
  width: calc(100%);
  background-image: linear-gradient(transparent calc(100% - 0.10em), currentColor 10px);
  background-repeat: no-repeat;
  background-size: 0% 100%;
  transition: background-size 0.6s;
  ${({ active }) => (active && activeStyle) || ''}
`

export default Underline