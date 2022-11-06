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
    position: { x: 325, y: 35 },
    style: { backgroundColor: 'lightgreen' },
  },
  {
    id: 'science',
    data: { label: 'Science - 14 hrs' },
    position: { x: 120, y: 5 }, 
    className: 'light', 
    style: { width: 180, height: 380 },
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
    position: { x: 15, y: 120 },
    style: { backgroundColor: 'lightgreen' },
    parentNode: 'science',
    extent: 'parent'
  },
  {
    id: 'phy2048',
    type: 'custom',
    data: { label: 'PHY 2048/2048L (4 hrs)', desc: 'Physics I w/ Lab' },
    position: { x: 15, y: 210 },
    style: { backgroundColor: 'lightblue' },
    parentNode: 'science',
    extent: 'parent'
  },
  {
    id: 'phy2049',
    type: 'custom',
    data: { label: 'PHY 2049/2049L (4 hrs)', desc: 'Physics II w/ Lab' },
    position: { x: 15, y: 300 },
    parentNode: 'science',
    extent: 'parent'
  },
  {
    id: 'math',
    data: { label: 'Mathematics - 17 hrs' },
    position: { x: -250, y: 5 }, 
    className: 'light', 
    style: { width: 350, height: 380 },
    connectable: false
  },
  {
    id: 'mac2281',
    type: 'custom',
    data: { label: 'MAC 2281 (4 hrs)', desc: 'Engineering Calculus I', grade: '[A-]' },
    position: { x: 100, y: 30 },
    style: { backgroundColor: 'lightgreen' },
    parentNode: 'math',
    extent: 'parent'
  },
  {
    id: 'mac2282',
    type: 'custom',
    data: { label: 'MAC 2282 (4 hrs)', desc: 'Engineering Calculus II' },
    position: { x: 100, y: 120 },
    style: { backgroundColor: 'lightblue' },
    parentNode: 'math',
    extent: 'parent'
  },
  {
    id: 'eng4450',
    type: 'custom',
    data: { label: 'ENG 4450 (2 hrs)', desc: 'Intro to Linear Systems' },
    position: { x: 15, y: 210 },
    parentNode: 'math',
    extent: 'parent'
  },
  {
    id: 'mac2283',
    type: 'custom',
    data: { label: 'MAC 2283 (4 hrs)', desc: 'Engineering Calculus III' },
    position: { x: 185, y: 210 },
    parentNode: 'math',
    extent: 'parent'
  },
  {
    id: 'egn3443',
    type: 'custom',
    data: { label: 'EGN 3443 (3 hrs)', desc: 'Prob and Statistics for Engineers' },
    position: { x: 100, y: 300 },
    parentNode: 'math',
    extent: 'parent'
  },
  {
    id: 'cop2510',
    type: 'custom',
    data: { label: 'COP 2510 (3 hrs)', desc: 'Programming Concepts' },
    position: { x: 325, y: 215 },
  },
  {
    id: 'cda3103',
    type: 'custom',
    data: { label: 'CDA 3103 (3 hrs)', desc: 'Computer Organization' },
    position: { x: 325, y: 310 },
  },
  {
    id: 'cop3514',
    type: 'custom',
    data: { label: 'COP 3514 (3 hrs)', desc: 'Program Design' },
    position: { x: 510, y: 310 },
  },
  {
    id: 'cot3100',
    type: 'custom',
    data: { label: 'COT 3100 (3 hrs)', desc: 'Discrete Structures' },
    position: { x: 695, y: 310 },
  },
  {
    id: 'cda3201',
    type: 'custom',
    data: { label: 'CDA 3201/3201L (4 hrs)', desc: 'Computer Logic Design w/ Lab' },
    position: { x: 325, y: 405 },
  },
  {
    id: 'cop4530',
    type: 'custom',
    data: { label: 'COP 4530 (3 hrs)', desc: 'Data Structures' },
    position: { x: 510, y: 405 },
  },
  {
    id: 'cda4205',
    type: 'custom',
    data: { label: 'CDA 4205/4205L (4 hrs)', desc: 'Computer Architecture w/ Lab' },
    position: { x: 325, y: 500 },
  },
  {
    id: 'cop4600',
    type: 'custom',
    data: { label: 'COP 4600 (3 hrs)', desc: 'Operating Systems' },
    position: { x: 510, y: 500 },
  },
  {
    id: 'cen4020',
    type: 'custom',
    data: { label: 'CEN 4020 (3 hrs)', desc: 'Software Engineering' },
    position: { x: 695, y: 500 },
  },
  {
    id: 'cot4400',
    type: 'custom',
    data: { label: 'COT 4400 (3 hrs)', desc: 'Analysis of Algorithms' },
    position: { x: 600, y: 595 },
  },
  {
    id: 'cnt4419',
    type: 'custom',
    data: { label: 'CNT 4419 (3 hrs)', desc: 'Secure Coding' },
    position: { x: 780, y: 595 },
  },
  {
    id: 'general',
    data: { label: 'General Electives' },
    position: { x: -250, y: 405 }, 
    className: 'light', 
    style: { width: 350, height: 200 },
    connectable: false
  },
  {
    id: 'rel2300',
    type: 'custom',
    data: { label: 'REL 2300 (3 hrs)', desc: 'Intro to World Religions', grade: '[B-]' },
    position: { x: 15, y: 30 },
    style: { backgroundColor: 'lightgreen' },
    parentNode: 'general',
    extent: 'parent'
  },
  {
    id: 'phi2010',
    type: 'custom',
    data: { label: 'PHI 2010 (3 hrs)', desc: 'Introduction to Philosophy', grade: '[A]' },
    position: { x: 185, y: 30 },
    style: { backgroundColor: 'lightgreen' },
    parentNode: 'general',
    extent: 'parent'
  },
  {
    id: 'phy2012',
    type: 'custom',
    data: { label: 'PHY 2012 (3 hrs)', desc: 'Intro to Psychological Science' },
    position: { x: 15, y: 120 },
    style: { backgroundColor: 'lightblue' },
    parentNode: 'general',
    extent: 'parent'
  },
  {
    id: 'language',
    type: 'custom',
    data: { label: 'Foreign Language', desc: '(8 hrs or 2 years high school)' },
    position: { x: 185, y: 120 },
    parentNode: 'general',
    extent: 'parent'
  },
  {
    id: 'departmental',
    data: { label: 'Departmental (Computer Science & Engineering) Electives Hardware, Software, Theory - 12 hrs' },
    position: { x: -250, y: 625 }, 
    className: 'light', 
    style: { width: 350, height: 200 },
    connectable: false
  },
  {
    id: 'cse1',
    type: 'custom',
    data: { label: 'CSE Elective (3 hrs)' },
    position: { x: 15, y: 50 },
    parentNode: 'departmental',
    extent: 'parent'
  },
  {
    id: 'cse2',
    type: 'custom',
    data: { label: 'CSE Elective (3 hrs)' },
    position: { x: 185, y: 50 },
    parentNode: 'departmental',
    extent: 'parent'
  },
  {
    id: 'cse3',
    type: 'custom',
    data: { label: 'CSE Elective (3 hrs)' },
    position: { x: 15, y: 125 },
    parentNode: 'departmental',
    extent: 'parent'
  },
  {
    id: 'cse4',
    type: 'custom',
    data: { label: 'CSE Elective (3 hrs)' },
    position: { x: 185, y: 125 },
    parentNode: 'departmental',
    extent: 'parent'
  },
  {
    id: 'enc3246',
    type: 'custom',
    data: { label: 'ENC 3246 (3 hrs)', desc: 'Communication for Engineers' },
    position: { x: 135, y: 425 },
  },
  {
    id: 'theory',
    type: 'custom',
    data: { label: 'CSE Theory Elective (3 hrs)' },
    position: { x: 135, y: 520 },
  },
  {
    id: 'cis4250',
    type: 'custom',
    data: { label: 'CIS 4250 (3 hrs)', desc: 'Ethical Issues and Prof Conduct' },
    position: { x: 135, y: 615 },
  },
  {
    id: 'software',
    data: { label: 'Computer Science & Engineering Software Electives - 6 hrs' },
    position: { x: 135, y: 715 }, 
    className: 'light', 
    style: { width: 350, height: 110 },
    connectable: false
  },
  {
    id: 'sw1',
    type: 'custom',
    data: { label: 'CSE Software Elective (3 hrs)' },
    position: { x: 10, y: 30 },
    parentNode: 'software',
    extent: 'parent'
  },
  {
    id: 'sw2',
    type: 'custom',
    data: { label: 'CSE Software Elective (3 hrs)' },
    position: { x: 180, y: 30 },
    parentNode: 'software',
    extent: 'parent'
  },
  {
    id: '4',
    type: 'custom',
    data: { label: 'Node 4', desc: 'node details' },
    position: { x: 600, y: 150 },
  },
];

const initialEdges: Edge[] = [
  { id: 'english', source: 'enc1101', target: 'enc1102', type: 'arrow' },
  { id: 'science', source: 'phy2048', target: 'phy2049', type: 'arrow' },
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
