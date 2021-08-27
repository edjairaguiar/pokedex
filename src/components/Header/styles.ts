import styled from 'styled-components'

export const Logo = styled.img`
  padding-left: 30px;
  width: 10rem;
  cursor: pointer;
  transition: all 2s;
  &:hover {
    transform: translateX(10em);
  }
`

export const Wrapper = styled.div`
  background-color: #ca3c25;
  width: 100%;
  height: 100px;
  text-align: center;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`

export const List = styled.ul`
  list-style-type: none;
  margin: 0;
  overflow: hidden;
`

export const Link = styled.a`
  font-size: 16px;
  padding-right: 50px;
  text-decoration: none;
  transition: all 2s;
  &:hover {
    font-size: 20px;
  }
`
