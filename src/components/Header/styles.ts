import styled from 'styled-components'

export const Logo = styled.img`
  padding-left: 40px;
  width: 10rem;
  cursor: pointer;
  transition: all 2s;
  &:hover {
    transform: translateX(10em);
  }
`

export const Wrapper = styled.div`
  border-radius: 30px 30px 0px 0px;
  background-color: #ca3c25;
  width: 50%;
  height: 15%;
  text-align: center;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`

export const List = styled.ul`
  padding: 30px;
  list-style-type: none;
  overflow: hidden;
`

export const Link = styled.a`
  margin-right: 10px;
  font-size: 16px;
  padding: 25px;
  text-decoration: none;
  transition: all 2s;
  border-radius: 30px;
  &:hover {
    background-color: rgb(9, 12, 2, 0.3);
  }
`
