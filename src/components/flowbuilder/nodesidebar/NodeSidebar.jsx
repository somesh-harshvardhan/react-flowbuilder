import React, { useEffect } from 'react';
import styled from 'styled-components';
import useStore from '../../../store';
import { activeNodeTypes } from '../../utils/constants';

const Container = styled.aside`
flex: 1;
background-color: #e5e5e5;
height: 100vh;
padding: 30px;
`

const NodeSidebar = () => {
    const {activeNode,reactFlowInstance,nodes} = useStore(state=>state);
    const COMPONENT = activeNodeTypes[activeNode?.type];
    
    // console.log(nodes)
  return (
    <Container>
     {COMPONENT ? <COMPONENT/> : null}
    </Container>
  )
}

export default NodeSidebar