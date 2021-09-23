import React from 'react'

import { Form, Card, Container, FlexItem, Navbar, Button, Pagination, Typography, Input } from 'simplyui'
import 'simplyui/dist/index.css'

const App = () => {
  return (
    <>
  <Typography>  
    <Navbar />
    <Container>
      <FlexItem columns='xs12 s5'>
        <Card><Button onClick={(e)=>{console.log(e)}}>click here</Button> Create React Library Example 😄 </Card>
      </FlexItem>
      <FlexItem columns='xs12 s5'>
        <Card><Button onClick={(e)=>{console.log(e)}}>click here</Button> Create React Library Example 😄 </Card>
      </FlexItem>
      <FlexItem columns='xs12 s5'>
        <Card><Button onClick={(e)=>{console.log(e)}}>click here</Button> Create React Library Example 😄 </Card>
      </FlexItem>
     
    </Container>
    <Card >
    <Form>

      <Input placeholder='test' options={{label:'date'}} name='test1' type="date" />
      <Input placeholder='test' options={{label:'range'}} name='test3' min="10" max="50" step="2" type="range" />
      <Input placeholder='test' options={{label:'file'}} name='test4' type="file" />
      <Input placeholder='test' options={{label:'email'}} name='test5' type="email" />
      
      <Input placeholder='test' options={{label:'number'}} name='text' type='number' />
      <Input placeholder='test' options={{label:'test'}} name='test6' type="submit" />
    </Form>
    </Card>
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
  </Typography>
  </>
  )
}

export default App
