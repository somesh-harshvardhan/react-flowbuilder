import { getOutgoers } from "reactflow";

const getAllConnectedNodes = (nodesArray=[],node,nodes,edges)=>{
    const nodesFound = getOutgoers(node,nodes,edges);
    let array = [...nodesArray]
    if(nodesFound){
     array = [...nodesArray,...nodesFound]
     for(let i = 0;i < nodesFound.length;i++){
       array=[...array,...getAllConnectedNodes(nodesArray,nodesFound[i],nodes,edges)] 
     }
    }
    return array;
   }

export default getAllConnectedNodes;