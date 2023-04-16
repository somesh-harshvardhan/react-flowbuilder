import { addEdge, applyEdgeChanges, applyNodeChanges } from "reactflow";
import { create } from "zustand";

const initialNodes = [{
  id  : "start",
  type : "trigger",
  data  : {label : "trigger node"},
  position  : {x: 400, y: 20}
}];
const initialEdges = [];

const useStore = create((set,get)=>({
  nodes : initialNodes,
  edges : initialEdges,
  id  : 0,
  activeNode : null,
  reactFlowInstance : null,
  getId  : ()=>`dnd_node_${get().id++}`,
  onNodesChange : (change)=>set({nodes : applyNodeChanges(change,get().nodes)}),
  onEdgesChange : (change)=>set({edges : applyEdgeChanges(change,get().edges)}),
  onConnect : (connection)=>set({edges : addEdge({...connection,type : "addbutton"},get().edges)}),
  setNodes : (newNode)=>set({nodes : get().nodes.concat(newNode)}),
  setEdges : (newEdge)=>set({edges : get().edges.concat(newEdge)}),
  deleteNode : (id)=>set({nodes : get().nodes.filter(node=>node.id !== id)}),
  setActiveNode : (node)=>set({activeNode : node}),
  setReactFlowInstance : (e)=>set({reactFlowInstance : e})
}));

export default useStore;