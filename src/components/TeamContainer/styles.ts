import styled from 'styled-components'

export const Wrapper = styled.div`
  opacity: 0.5;
  background-color: #c4cad0;
  width: 80rem;
  height: 12rem;
  text-align: center;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  transition: all 1s;
  cursor: pointer;
  &:hover {
    opacity: 1;
  }
`
