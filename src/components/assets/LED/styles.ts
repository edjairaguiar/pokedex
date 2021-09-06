import styled from 'styled-components'

export const LedLight = styled.div`
  background-color: #fff;
  width: 1rem;
  height: 1rem;
  border-radius: 50%;
  margin: 2.5rem;
  display: inline-block;
  box-shadow: 0 0 0.5rem 0.3rem #86bbd8;
  transition: all 1s;
  cursor: pointer;
  &:hover {
    background-color: #fff;
    box-shadow: 0 0 0.5rem 0.3rem #fcfdaf;
  }
`
