import React, { useState } from 'react'
import styled from 'styled-components'
import  {IoIosAddCircle} from 'react-icons/io'
import { getBezierPath } from 'reactflow';
import Modal from '../../../Modal/Modal';
const foreignObjectSize = 40;


export default function AddButtonEdge({
  id,
  sourceX,
  sourceY,
  targetX,
  targetY,
  sourcePosition,
  targetPosition,
  style = {},
  markerEnd,
}) {
  const [edgePath, labelX, labelY] = getBezierPath({
    sourceX,
    sourceY,
    sourcePosition,
    targetX,
    targetY,
    targetPosition,
  });
  const [open,setOpen] = useState(false);

  const handleOpen = ()=>setOpen(true);
  const handleClose = ()=>setOpen(false);
  const onEdgeClick = (event,id)=>{
    // handleOpen(true);
    // console.log(event,id)
  }
  return (
    <>
      <path
        id={id}
        style={style}
        strokeDasharray={"5,5"}
        className="react-flow__edge-path"
        d={edgePath}
        markerEnd={markerEnd}
      />
      <foreignObject
        width={foreignObjectSize}
        height={foreignObjectSize}
        x={labelX - foreignObjectSize / 2}
        y={labelY - foreignObjectSize / 2}
        className="edgebutton-foreignobject"
        requiredExtensions="http://www.w3.org/1999/xhtml"
      >
            <IoIosAddCircle style={{height : '100%',width : '100%',background : "white"}}   onClick={(event) => onEdgeClick(event, id)}/>
      </foreignObject>
      <Modal open={open} handleClose={handleClose}/>
    </>
  );
}