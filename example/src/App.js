import React from 'react'

import { Form, Card, Container, FlexItem, Navbar, NavbarBreak, Button, Pagination, Typography, Input, Reset, FluidContainer, Theme } from 'simplyui'
import 'simplyui/dist/index.css'

const App = () => {
  return (
    <>
    <Theme theme={{'--primary': '#0355e2'}}>
    <Reset>
  <Typography>  
    <Navbar options={{fluid:true}}>
     <a href='#' className="logo">
        Logo
      </a>
      <NavbarBreak></NavbarBreak>
        <a href='#' >Home</a>
        <a href='#' >About</a>
        <a href='#' >Contact Us</a>
    </Navbar>
    <FluidContainer>
    <Card>
    <Container>
        <FlexItem columns='s12 m4'>
          <h2>By from us</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          <Button>click me</Button>
        </FlexItem>
        <FlexItem columns='s12 m4'>
          <h2>By from us</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          <Button>click me</Button>
        </FlexItem>
        <FlexItem columns='s12 m4'>
          <h2>By from us</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          <Button>click me</Button>
        </FlexItem>
    </Container>
    </Card>
    <Container>
      <FlexItem columns='s12 m4'>
        <Card options={{rounded:true}}>
          <h2>Amazing Deals</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus doloremque, blanditiis quos laudantium impedit dolorem?</p>
          <Button options={{rounded:true}} onClick={(e)=>{console.log(e)}}>click here</Button>
        </Card>
      </FlexItem>
      <FlexItem columns='s12 m4'>
        <Card options={{rounded:true}}>
          <h2>Amazing Deals</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, rerum.</p>
          <Button options={{rounded:true}} onClick={(e)=>{console.log(e)}}>click here</Button>
        </Card>
      </FlexItem>
      <FlexItem columns='s12 m4'>
        <Card options={{rounded:true}}>
          <h2>Amazing Deals</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut vero debitis praesentium ipsum enim nobis, unde quo nostrum fugit commodi?</p>
          <Button options={{rounded:true}} onClick={(e)=>{console.log(e)}}>click here</Button>
        </Card>
      </FlexItem>
     
    </Container>
    <Container>
    <FlexItem columns='s12 m6'>
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
    <FlexItem columns='s12 m6'>
      <Card>
    <Pagination options={{pageLength:7}}>
      <div className="">item</div>
      <div className="">item</div>
      <div className="">item</div>
      <div className="">item</div>
      <div className="">item</div>
      <div className="">item</div>
      <div className="">item</div>
      <div className="">item</div>
      <div className="">item</div>
      <div className="">item</div>
      <div className="">item</div>
      <div className="">item</div>
      <div className="">item</div>
      <div className="">item</div>
      <div className="">item</div>
      <div className="">item</div>
      <div className="">item</div>
      <div className="">item</div>
      <div className="">item</div>
      <div className="">item</div>
      <div className="">item</div>
      <div className="">item</div>
      <div className="">item</div>
      <div className="">item</div>
      <div className="">item</div>
      <div className="">item</div>
      <div className="">item</div>
      <div className="">item</div>
      <div className="">item</div>
      <div className="">item</div>
      <div className="">item</div>
    </Pagination>
    </Card>
    </FlexItem>
    </Container>
    </FluidContainer>
  </Typography>
  </Reset>
  </Theme>
  </>
  )
}

export default App
