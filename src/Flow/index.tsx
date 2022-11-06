import { useCallback } from 'react';
import ReactFlow, {
  Node,
  useNodesState,
  useEdgesState,
  addEdge,
  Connection,
  Edge,
} from 'reactflow';

import CustomNode from './CustomNode';

// this is important! You need to import the styles from the lib to make it work
import 'reactflow/dist/style.css';

import './Flow.css';



const nodeTypes = {
  custom: CustomNode,
};

const initialNodes: Node[] = [
  {
    id: 'english',
    data: { label: 'English - 6 hrs' },
    position: { x: 500, y: 5 }, 
    className: 'light', 
    style: { width: 350, height: 110 },
    connectable: false
  },
  {
    id: 'enc1101',
    type: 'custom',
    data: { label: 'ENC 1101 (3 hrs)', desc: 'Composition I', grade: '[A]' },
    position: { x: 10, y: 30 },
    style: { backgroundColor: 'lightgreen' },
    parentNode: 'english',
    extent: 'parent'
  },
  {
    id: 'enc1102',
    type: 'custom',
    data: { label: 'ENC 1102 (3 hrs)', desc: 'Composition II', grade: '[A]' },
    position: { x: 180, y: 30 },
    style: { backgroundColor: 'lightgreen' },
    parentNode: 'english',
    extent: 'parent'
  },
  {
    id: 'eng3000',
    type: 'custom',
    data: { label: 'ENG 3000/300L (4 hrs)', desc: 'Foundations of Engineering', grade: '[A]' },
    position: { x: 325, y: 55 },
    style: { backgroundColor: 'lightgreen' },
  },
  {
    id: 'science',
    data: { label: 'Science - 14 hrs' },
    position: { x: 120, y: 5 }, 
    className: 'light', 
    style: { width: 180, height: 400 },
    connectable: false
  },
  {
    id: 'bsc1005',
    type: 'custom',
    data: { label: 'BSC 1005 (3 hrs)', desc: 'Biology for Non-majors', grade: '[A]' },
    position: { x: 15, y: 30 },
    style: { backgroundColor: 'lightgreen' },
    parentNode: 'science',
    extent: 'parent'
  },
  {
    id: 'esc2000',
    type: 'custom',
    data: { label: 'ESC 2000 (3 hrs)', desc: 'Intro to Earth Science', grade: '[A]' },
    position: { x: 15, y: 100 },
    style: { backgroundColor: 'lightgreen' },
    parentNode: 'science',
    extent: 'parent'
  },
  {
    id: '4',
    type: 'custom',
    data: { label: 'Node 4', desc: 'node details' },
    position: { x: 400, y: 200 },
  },
];

const initialEdges: Edge[] = [
  { id: 'english', source: 'enc1101', target: 'enc1102', animated: true },
  { id: 'science-1', source: 'bsc1005', target: 'esc2000', animated: true },
  { id: 'e1-3', source: '1', target: '3', animated: true },
];

function Flow() {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
  const onConnect = useCallback(
    (params: Connection | Edge) => setEdges((eds) => addEdge(params, eds)),
    [setEdges]
  );

  
  return (
    <div className="Flow">
      <ReactFlow
        nodes={nodes}
        onNodesChange={onNodesChange}
        edges={edges}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        fitView
        nodeTypes={nodeTypes}
      />
    </div>
  );
}

export default Flow;
