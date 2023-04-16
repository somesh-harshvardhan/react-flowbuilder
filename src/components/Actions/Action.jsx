import React from "react";
import styled from "styled-components";
import { BsHexagon } from "react-icons/bs";
const Container = styled.div`
  .title {
    font-weight: 500;
    margin-bottom: 20px;
    font-size: 15px;
    line-height: 22px;
  }
  .title span{
    font-weight: 400;
    font-size: 9px;
    line-height: 20px;
  }
  .action {
    padding: 10px 10px;
    border: 1px solid black;
    margin: 14px 0;
    border-radius: 4px;
    font-size: 12px;
    display: flex;
    align-items: center;
    column-gap: 10px;
  }
  .icon {
    font-size: 20px;
  }
  margin-bottom: 30px;
`;
const Action = ({ actions = [], title ,showDragDropText=false}) => {
  const onDragStart = (event, nodeType, ...rest) => {
    event.dataTransfer.setData(
      "application/reactflow",
      JSON.stringify({ nodeType, ...rest })
    );
    event.dataTransfer.effectAllowed = "move";
  };
  return (
    <Container>
      <h3 className="title">{title} {showDragDropText && (<span>(Drag & Drop)</span>)}</h3>
      {actions.map((action) => (
        <div
          className="action"
          key={action.type}
          onDragStart={(e) => onDragStart(e, action.nodeType, action.data)}
          draggable
        >
          <action.data.icon className="icon" /> {action.data.title}
        </div>
      ))}
    </Container>
  );
};

export default Action;
