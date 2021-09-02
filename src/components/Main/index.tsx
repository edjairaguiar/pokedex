import React from 'react'
import Header from 'components/Header'
import styled from 'styled-components'
import TeamContainer from 'components/TeamContainer'

const Container = styled.div`
  background-color: #eeeeee;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const Main = () => (
  <Container>
    <Header />
    <TeamContainer />
  </Container>
)

export default Main
