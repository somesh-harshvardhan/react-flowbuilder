import React from "react";
import styled from "styled-components";
import FieldSet from "../../../../shared/FieldSet/FieldSet";
import CustomSelect from "../../../../shared/Select/CustomSelect";
import useStore from "../../../../../store";
import { colorStyles } from "../selectStyle";
const Container = styled.div``;

const Trigger = () => {
  const {reactFlowInstance,activeNode} = useStore()
  const options = [
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
  ];

  const handleSelectChange= (value)=>{
   if(activeNode && reactFlowInstance){
     reactFlowInstance.setNodes(nds=>nds.map(nd=>{
      if(nd.type === activeNode.type){
        nd.data.trigger = value.label
      }
      return nd
     }))
   }
  }
  return (
    <Container>
      <FieldSet
        legendtext="Trigger type"
        border="1px solid var(--primary-black)"
        padding="0px 19px"
      >
        <CustomSelect
          styles={colorStyles}
          placeholder="Select a trigger type"
          options={options}
          onSelectChange={handleSelectChange}
        />
      </FieldSet>
    </Container>
  );
};

export default Trigger;
