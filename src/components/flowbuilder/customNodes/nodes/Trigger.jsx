import React, { useEffect, useState } from "react";
import { Handle, Position, useReactFlow } from "reactflow";
import styled from "styled-components";
import { useFlowContext } from "../../Flowbuilder";
import useStore from "../../../../store";
import { ThunderIcon } from "../../../../SvgIcons";
import useCustomSnackbar from "../../../views/useCustomSnackbar";

const Container = styled.div`
  padding: 16px 19px;
  height: 95px;
  width: 225px;
  background-color: var(--bgcolor-primary);
  border-radius: 4px;
  .title {
    font-weight: 700;
    font-size: 11px;
    display: flex;
    align-items: center;
    gap: 10px;
  }
  .thunder {
    height: 30px;
    width: 30px;
    border-radius: 50%;
    background-color: var(--primary-black);
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-size: 11px;
  }
  .item {
    > p {
      margin-left: 41px;
      font-size: 12px;
      line-height: 18px;
    }
    .when {
      font-weight: 300;
      color: gray;
    }
  }
`;
const Trigger = (props) => {
  const { setNodes } = useReactFlow();
  const { reactFlowWrapper } = useFlowContext();
  const { setActiveNode, nodes } = useStore();
  const [isValid,setIsValid]  = useState(false);
  const { enqueueSnackbar} = useCustomSnackbar()
  const node = props;
  useEffect(() => {
    if (reactFlowWrapper) {
      setNodes((nodes) =>
        nodes.map((nd) => {
          if (nd.id === node.id) {
            const reactFlowBounds = reactFlowWrapper.getBoundingClientRect();
            nd.position.x = reactFlowBounds.width * 0.4;
          }
          return nd;
        })
      );
    }
  }, [reactFlowWrapper]);

  useEffect(() => {
    setActiveNode(node);
  }, []);
  const validate = (connection,isValid)=>{
    if(!isValid) enqueueSnackbar("Please validate the node first","error")
    return isValid
  }
  return (
    <>
      <Container>
        <div className="item">
          <header className="title">
            {" "}
            <span className="thunder">
              <ThunderIcon />
            </span>{" "}
            <span>Trigger</span>
          </header>
         {node.data.trigger ?  <><p className="when">When someone</p>
          <p className="select">{node.data.trigger}</p></> : <p>Select trigger on the right to get started</p>}
        </div>
        {/* <button onClick={()=>setIsValid(true)}>Validate</button> */}
      </Container>
      <div className="handle">
        <Handle
          position={Position.Bottom}
          style={{ background: "var(--primary-black)", height: 10, width: 10 }}
          isValidConnection={connection=>validate(connection,isValid)}
        />
      </div>
    </>
  );
};

export default Trigger;
