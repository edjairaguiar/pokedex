import styled from 'styled-components'

export const Wrapper = styled.div`
  border-radius: 5rem 5rem 0rem 0rem;
  background-color: #ca3c25;
  border-bottom: 1rem solid #3a3b40;
  width: 80rem;
  height: 12rem;
  text-align: center;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`

export const Navigation = styled.ul`
  padding: 3rem;
  list-style-type: none;
  overflow: hidden;
`

export const Item = styled.li`
  display: inline;
`

export const Link = styled.a`
  margin-right: 2rem;
  font-size: 2rem;
  padding: 2.5rem;
  text-decoration: none;
  transition: all 2s;
  border-radius: 3rem;
  &:hover {
    background-color: rgb(9, 12, 2, 0.3);
  }
`
