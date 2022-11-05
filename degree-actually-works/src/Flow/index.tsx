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
    id: 'enc1101',
    type: 'custom',
    data: { label: 'ENC 1101 (3 hrs)', desc: 'Composition I', grade: '[A]' },
    position: { x: 250, y: 5 },
  },
  {
    id: 'enc1102',
    type: 'custom',
    data: { label: 'ENC 1102 (3 hrs)', desc: 'Composition II', grade: '[A]' },
    position: { x: 100, y: 100 },
  },
  {
    id: 'eng3000',
    type: 'custom',
    data: { label: 'ENG 3000/300L (4 hrs)', desc: 'Foundations of Engineering', grade: '[A]' },
    position: { x: 400, y: 100 },
  },
  {
    id: '4',
    data: { label: 'Node 4', desc: 'node details' },
    position: { x: 400, y: 200 },
    type: 'custom',
  },
];

const initialEdges: Edge[] = [
  { id: 'english', source: 'enc1101', target: 'enc1102', animated: true },
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
