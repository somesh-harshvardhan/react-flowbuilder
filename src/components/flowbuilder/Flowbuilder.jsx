import { useCallback, useEffect, useRef, useState,createContext,useContext } from "react";
import ReactFlow, {
  Background,
} from "reactflow";
import "reactflow/dist/style.css";
import styled from "styled-components";
import useStore from "../../store";
import * as Triggers from './customNodes/index';

import AddButtonEdge from "./customEdges/addButton/AddButton";


const Container = styled.section`
  flex: 4;
  height: 100vh;
`;
const types = Triggers.default
const nodeTypes = {
 trigger : types.Trigger,
 A : types.TriggerTypeA,
 B : types.TriggerTypeB,
 C : types.TriggerTypeC,
 D : types.TriggerTypeD
};

const edgeTypes  = {
  addbutton : AddButtonEdge
};

const FlowContext = createContext({
  reactFlowWrapper : null
})

const Flowbuilder = () => {
  const state = useStore(state=>state);
  const {nodes,edges,activeNode,reactFlowInstance,onNodesChange,onConnect,onEdgesChange,setNodes,getId,setEdges,setActiveNode,setReactFlowInstance} = state;
  const reactFlowWrapper = useRef(null);
  const onDragOver = useCallback((event) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = 'move';
  }, []);
  const onDrop = useCallback(
    (event) => {
      event.preventDefault();

      const reactFlowBounds = reactFlowWrapper.current.getBoundingClientRect();
      const data = event.dataTransfer.getData('application/reactflow');
      const {nodeType : type,...rest} = JSON.parse(data)
      // check if the dropped element is valid
      if (typeof type === 'undefined' || !type) {
        return;
      }
      const position = reactFlowInstance.project({
        x: event.clientX - reactFlowBounds.left,
        y: event.clientY - reactFlowBounds.top,
      });
      let id =getId();
      const newNode = {
        id: id,
        type,
        position,
        data: { label: `${type} node`,reactFlowInstance ,...rest},
        
      };
      setActiveNode(newNode)
      setNodes(newNode);
    },
    [reactFlowInstance,nodes]
  );
  return (
    <FlowContext.Provider value={{reactFlowWrapper : reactFlowWrapper.current}}>
    <Container ref={reactFlowWrapper} onClick={()=>setActiveNode(null)}>
      <ReactFlow
        panOnScroll
        panOnDrag={false}
        nodes={nodes}
        edges={edges}
        onNodeClick={(_,node)=>{_.stopPropagation();setActiveNode(node)}}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        onInit={setReactFlowInstance}
        onDrop={onDrop}
        onDragOver={onDragOver}
        nodeTypes={nodeTypes}
        zoomOnPinch={false}
        zoomOnScroll={false}
      >
        <Background color="white" variant="dots" gap={1} size={0} />
      </ReactFlow>
    </Container>
    </FlowContext.Provider>
  );
};
export const useFlowContext = ()=>useContext(FlowContext);
export default Flowbuilder;
