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
        <Card options={{rounded:true}}><Button options={{rounded:true}} onClick={(e)=>{console.log(e)}}>click here</Button> Create React Library Example 😄 </Card>
      </FlexItem>
      <FlexItem columns='xs12 s5'>
        <Card><Button onClick={(e)=>{console.log(e)}}>click here</Button> Create React Library Example 😄 </Card>
      </FlexItem>
      <FlexItem columns='xs12 s5'>
        <Card><Button onClick={(e)=>{console.log(e)}}>click here</Button> Create React Library Example 😄 </Card>
      </FlexItem>
     
    </Container>
    <Container>
    <FlexItem columns='xs12 s3'></FlexItem>
    <FlexItem columns='xs12 s6'>
    <Card >
    <Form onSubmit={(object)=>console.log(object)}>

      <Input placeholder='test' options={{label:'Date:'}} name='test1' type="date" />
      <Input placeholder='test' options={{label:'Range:'}} name='test3' min="10" max="50" step="2" type="range" />
      <Input placeholder='test' options={{label:'File:'}} name='test4' type="file" />
      <Input placeholder='test' options={{label:'This is a label:'}} name='test5' type="email" />
      
      <Input placeholder='test' options={{label:'Number:'}} name='text' type='number' />
      <Input placeholder='test' name='test6' type="submit" value='Submit' />
    </Form>
    </Card>
    </FlexItem>
    <FlexItem columns='xs12 s3'></FlexItem>
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
  </Typography>
  </>
  )
}

export default App
