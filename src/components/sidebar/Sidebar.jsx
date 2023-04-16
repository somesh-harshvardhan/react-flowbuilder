import React from 'react'
import styled from 'styled-components';
import Options from './../actions/index';
import { BackIcon } from '../../SvgIcons';
const Container = styled.aside`
    flex: 1;
    background-color: #e5e5e5;
    height: 100vh;
    padding: 20px 30px 0 42px;
    .collapse {
      font-size: 10px;
      display: flex;
      align-items: center;
      line-height: 20px;
      gap: 10px;
    }
`
const ActionsContainer = styled.div`
  margin-top: 28px;
`
const Sidebar = () => {
   
  return (
   <Container>
    <div className='collapse'><BackIcon/> Collapse</div>
    <ActionsContainer>
    {
        Options.map((option,indx)=><option.Action key={indx}/>)
    }
    </ActionsContainer>
   </Container>
  )
}

export default Sidebar