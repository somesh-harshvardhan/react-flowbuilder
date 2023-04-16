import React, { useEffect } from "react";
import styled from "styled-components";
import { BsHexagon } from "react-icons/bs";
import { Handle, Position, useNodes } from "reactflow";
import { connectOptions } from "../../utils/constants";
import useStore from "../../../store";


const Container = styled.div`
  padding: 20px;
  border-radius: 8px;
  background-color: #e5e5e5;
  h3 {
    vertical-align: middle;
    display: flex;
    align-items: center;
    gap: 10px;
    font-size: 14px;
  }
  > * {
    margin: 10px 0;
  }
  p {
    margin-left: 25px;
  }
  .subs-type {
    font-weight: 700;
  }
  .handleWrapper{
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    >div{
      position: relative;
    }
    .react-flow__handle-bottom{
      bottom: -10px;
    }
  }
`;
const Trigger = ({
  triggerType,
  bothSourceTarget,
  onlySource,
  onlyTarget,
  targetSplitSource,
  ...rest
}) => {
 
  const { edges, getId ,setActiveNode ,activeNode} = useStore((state) => state);
  const {
    id,
    data: { reactFlowInstance },
  } = rest;
  const getConnectOption = (bothSourceTarget, onlySource, onlyTarget) => {
    if (bothSourceTarget) {
      return connectOptions["both"];
    } else if (onlySource) {
      return connectOptions["source"];
    } else if (onlyTarget) {
      return connectOptions["target"];
    } else if (targetSplitSource) {
      return connectOptions["oneTargetTwoSource"]
    }
  };
  const connectValue = getConnectOption(
    bothSourceTarget,
    onlySource,
    onlyTarget
  );
  // console.log(activeNode)
  const deleteNode = (e) => {
    e.stopPropagation();
    // const sourceEdge = edges.find((edge) => edge.source === id);
    // const targetEdge = edges.find((edge) => edge.target === id);
    // reactFlowInstance.setNodes((nds) => nds.filter((node) => node.id !== id))
    // if (sourceEdge && targetEdge) {
    //   reactFlowInstance.setEdges((edges) => [
    //     ...edges,
    //     {
    //       id: getId(),
    //       target: sourceEdge.target,
    //       source: targetEdge.source,
    //       type: "step"
    //     },
    //   ]);
    // }
    setActiveNode(null)
    reactFlowInstance.deleteElements({nodes : [rest]})
   
  };
  return (
    <Container >
      {(connectValue === 1 || connectValue === 3 || connectValue == 4) && (
        <Handle position={Position.Top} type="target"  />
      )}
      <h3>
        <BsHexagon fontSize={20} />
        {triggerType}
      </h3>
      <p>{rest.data[0].title}</p>
      <p className="subs-type">{rest.data[0].body}</p>
      <button onClick={deleteNode}>Delete</button>
      {(connectValue === 1 || connectValue === 2) && (
        <Handle position={Position.Bottom} type="source"   />
      )}
      {
        (connectValue === 4) && (
          <div className="handleWrapper">
            <div> Yes <span><Handle position={Position.Bottom}   id="0" type="source"/></span> </div>
            <div>No <span><Handle position={Position.Bottom}   id="1" type="source"/></span> </div>
          </div>

        )
      }
    </Container>
  );
};

export default Trigger;
