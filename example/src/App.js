import React from 'react'

import { Card, Container, FlexItem, Navbar, Button, Pagination } from 'simplyui'
import 'simplyui/dist/index.css'

const App = () => {
  return (
    <>
  <Navbar />
  <Container>
    <FlexItem columns='xs12 s5'>
      <Card text="Create React Library Example 😄" ><Button text='click me' onClick={(e)=>{console.log(e)}} /> </Card>
    </FlexItem>
    <FlexItem columns='xs12 s7'>
      <Card text="Create React Library Example 😄" ><Button text='click me' onClick={()=>{console.log('hello')}} /> </Card>
    </FlexItem>
    <FlexItem columns='xs12 s3'>
      <Card text="Create React Library Example 😄" ><Button text='click me' onClick={()=>{console.log('hello')}} /> </Card>
    </FlexItem>
    <FlexItem columns='xs12 s4'>
      <Card text="Create React Library Example 😄" ><Button text='click me' onClick={()=>{console.log('hello')}} /> </Card>
    </FlexItem>
    <FlexItem columns='xs12 s5'>
      <Card text="Create React Library Example 😄" ><Button text='click me' onClick={()=>{console.log('hello')}} /> </Card>
    </FlexItem>
    <FlexItem columns='xs6'>
      <Card text="Create React Library Example 😄" ><Button text='click me' onClick={()=>{console.log('hello')}} /> </Card>
    </FlexItem>
    <FlexItem columns='xs6'>
      <Card text="Create React Library Example 😄" ><Button text='click me' onClick={()=>{console.log('hello')}} /> </Card>
    </FlexItem>
  </Container>
  <Pagination options={{pageLength:3}}>
    <Card>item one</Card>
    <Card>item two</Card>
    <Card>item three</Card>
    <Card>item four</Card>
    <Card>item five</Card>
    <Card>item six</Card>
    <Card>item seven</Card>
    <Card>item eight</Card>
    <Card>item nine</Card>
  </Pagination>
  </>
  )
}

export default App
