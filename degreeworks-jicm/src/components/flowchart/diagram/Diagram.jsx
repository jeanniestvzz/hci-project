import React from 'react';
import ReactFlow, { Controls, Background } from 'reactflow';
import 'reactflow/dist/style.css';

const elements = [
    { id: '1', data: { label: 'Node 1' }, position: { x: 250, y: 5 } },
    { id: '2', data: { label: 'Node 2' }, position: { x: 100, y: 100 } },
];

function Flow() {
  return (
    <div style={{ width: '100px', height: '100px' }}>
      <ReactFlow elements={elements}>
        <Background />
        <Controls />
      </ReactFlow>
    </div>
  );
}

export default Flow;