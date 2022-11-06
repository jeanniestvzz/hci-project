import { useCallback } from 'react';
import ReactFlow, {
  Node,
  useNodesState,
  useEdgesState,
  addEdge,
  Background,
  Connection,
  Edge,
  MarkerType,
  Controls,
} from 'reactflow';

import CustomNode from './CustomNode';

// this is important! You need to import the styles from the lib to make it work
import 'reactflow/dist/style.css';

import './Flow.css';

const nodeTypes = {
  custom: CustomNode,
};

const internshipStr = "An industry internship is recommended for the third summer. Credit can be earned as CIS 4940 Industry Internship. See the Department Advisor for more information.";

const notesStr = "1) Unless otherwise stated, the minimum acceptable grade in all BSCS required math, science, and engineering courses is a C or higher (C- is insufficient). The minimum acceptable grade in specialization courses is a C-, except as stated in the progression and continuation requirements in the catalog. 2) A student may substitute a second 'Physical Science' course for the required 'Life Science' course. 3) COP 4530 is the minimum prereq for most software electives. CDA 3201 with lab is the minimum prereq for most hardware electives. COP 4530 and COT 3100 are the minimum prereqs for theory electives. 4) The maximum number of credit hours for CIS 4900, CIS 4915, and CIS 4940 in any combination is 6 credit hours.";

const initialNodes: Node[] = [
  {
    id: 'english',
    data: { label: 'English - 6 hrs' },
    position: { x: 500, y: 5 }, 
    className: 'light', 
    style: { width: 350, height: 150, backgroundColor: 'rgba(0, 0, 0, 0.0)' },
    connectable: false
  },
  {
    id: 'enc1101',
    type: 'custom',
    data: { label: 'ENC 1101 (3 hrs)', desc: 'Composition I', grade: '[A]' },
    position: { x: 10, y: 50 },
    style: { backgroundColor: 'rgba(0, 255, 0, 0.6)' },
    parentNode: 'english',
    extent: 'parent',
    connectable: false,
  },
  {
    id: 'enc1102',
    type: 'custom',
    data: { label: 'ENC 1102 (3 hrs)', desc: 'Composition II', grade: '[A]' },
    position: { x: 180, y: 50 },
    style: { backgroundColor: 'rgba(0, 255, 0, 0.6)' },
    parentNode: 'english',
    extent: 'parent',
    connectable: false,
  },
  {
    id: 'eng3000',
    type: 'custom',
    data: { label: 'ENG 3000/300L (4 hrs)', desc: 'Foundations of Engineering', grade: '[A]' },
    position: { x: 325, y: 35 },
    style: { backgroundColor: 'rgba(0, 255, 0, 0.6)', fontSize: '10px' },
    connectable: false,
  },
  {
    id: 'science',
    data: { label: 'Science - 14 hrs' },
    position: { x: 120, y: 5 }, 
    className: 'light', 
    style: { width: 180, height: 380, backgroundColor: 'rgba(0, 0, 0, 0.0)' },
    connectable: false
  },
  {
    id: 'bsc1005',
    type: 'custom',
    data: { label: 'BSC 1005 (3 hrs)', desc: 'Biology for Non-majors', grade: '[A]' },
    position: { x: 15, y: 30 },
    style: { backgroundColor: 'rgba(0, 255, 0, 0.6)' },
    parentNode: 'science',
    extent: 'parent',
    connectable: false,
  },
  {
    id: 'esc2000',
    type: 'custom',
    data: { label: 'ESC 2000 (3 hrs)', desc: 'Intro to Earth Science', grade: '[A]' },
    position: { x: 15, y: 120 },
    style: { backgroundColor: 'rgba(0, 255, 0, 0.6)' },
    parentNode: 'science',
    extent: 'parent',
    connectable: false,
  },
  {
    id: 'phy2048',
    type: 'custom',
    data: { label: 'PHY 2048/2048L (4 hrs)', desc: 'Physics I w/ Lab' },
    position: { x: 15, y: 210 },
    style: { backgroundColor: 'rgba(0, 255, 255, 0.6)' },
    parentNode: 'science',
    extent: 'parent',
    connectable: false,
  },
  {
    id: 'phy2049',
    type: 'custom',
    data: { label: 'PHY 2049/2049L (4 hrs)', desc: 'Physics II w/ Lab' },
    position: { x: 15, y: 300 },
    parentNode: 'science',
    extent: 'parent',
    connectable: false,
  },
  {
    id: 'math',
    data: { label: 'Mathematics - 17 hrs' },
    position: { x: -250, y: 5 }, 
    className: 'light', 
    style: { width: 350, height: 380, backgroundColor: 'rgba(0, 0, 0, 0.0)' },
    connectable: false
  },
  {
    id: 'mac2281',
    type: 'custom',
    data: { label: 'MAC 2281 (4 hrs)', desc: 'Engineering Calculus I', grade: '[A-]' },
    position: { x: 100, y: 30 },
    style: { backgroundColor: 'rgba(0, 255, 0, 0.6)' },
    parentNode: 'math',
    extent: 'parent',
    connectable: false,
  },
  {
    id: 'mac2282',
    type: 'custom',
    data: { label: 'MAC 2282 (4 hrs)', desc: 'Engineering Calculus II' },
    position: { x: 100, y: 120 },
    style: { backgroundColor: 'rgba(0, 255, 255, 0.6)' },
    parentNode: 'math',
    extent: 'parent',
    connectable: false,
  },
  {
    id: 'eng4450',
    type: 'custom',
    data: { label: 'ENG 4450 (2 hrs)', desc: 'Intro to Linear Systems' },
    position: { x: 15, y: 210 },
    parentNode: 'math',
    extent: 'parent',
    connectable: false,
  },
  {
    id: 'mac2283',
    type: 'custom',
    data: { label: 'MAC 2283 (4 hrs)', desc: 'Engineering Calculus III' },
    position: { x: 185, y: 210 },
    parentNode: 'math',
    extent: 'parent',
    connectable: false,
  },
  {
    id: 'egn3443',
    type: 'custom',
    data: { label: 'EGN 3443 (3 hrs)', desc: 'Prob and Statistics for Engineers' },
    position: { x: 100, y: 300 },
    parentNode: 'math',
    extent: 'parent',
    connectable: false,
  },
  {
    id: 'cop2510',
    type: 'custom',
    data: { label: 'COP 2510 (3 hrs)', desc: 'Programming Concepts' },
    position: { x: 325, y: 215 },
    style: { backgroundColor: 'rgba(0, 255, 255, 0.6)' },
    connectable: false,
  },
  {
    id: 'cda3103',
    type: 'custom',
    data: { label: 'CDA 3103 (3 hrs)', desc: 'Computer Organization' },
    position: { x: 325, y: 310 },
    connectable: false,
  },
  {
    id: 'cop3514',
    type: 'custom',
    data: { label: 'COP 3514 (3 hrs)', desc: 'Program Design' },
    position: { x: 510, y: 310 },
    connectable: false,
  },
  {
    id: 'cot3100',
    type: 'custom',
    data: { label: 'COT 3100 (3 hrs)', desc: 'Discrete Structures' },
    position: { x: 695, y: 310 },
    connectable: false,
  },
  {
    id: 'cda3201',
    type: 'custom',
    data: { label: 'CDA 3201/3201L (4 hrs)', desc: 'Computer Logic Design w/ Lab' },
    position: { x: 325, y: 405 },
    connectable: false,
  },
  {
    id: 'cop4530',
    type: 'custom',
    data: { label: 'COP 4530 (3 hrs)', desc: 'Data Structures' },
    position: { x: 510, y: 405 },
    connectable: false,
  },
  {
    id: 'cda4205',
    type: 'custom',
    data: { label: 'CDA 4205/4205L (4 hrs)', desc: 'Computer Architecture w/ Lab' },
    position: { x: 325, y: 500 },
    connectable: false,
  },
  {
    id: 'cop4600',
    type: 'custom',
    data: { label: 'COP 4600 (3 hrs)', desc: 'Operating Systems' },
    position: { x: 510, y: 500 },
    connectable: false,
  },
  {
    id: 'cen4020',
    type: 'custom',
    data: { label: 'CEN 4020 (3 hrs)', desc: 'Software Engineering' },
    position: { x: 695, y: 500 },
    connectable: false,
  },
  {
    id: 'cot4400',
    type: 'custom',
    data: { label: 'COT 4400 (3 hrs)', desc: 'Analysis of Algorithms' },
    position: { x: 600, y: 595 },
    connectable: false,
  },
  {
    id: 'cnt4419',
    type: 'custom',
    data: { label: 'CNT 4419 (3 hrs)', desc: 'Secure Coding' },
    position: { x: 780, y: 595 },
    connectable: false,
  },
  {
    id: 'general',
    data: { label: 'General Electives' },
    position: { x: -250, y: 405 }, 
    className: 'light', 
    style: { width: 350, height: 200, backgroundColor: 'rgba(0, 0, 0, 0.0)' },
    connectable: false
  },
  {
    id: 'rel2300',
    type: 'custom',
    data: { label: 'REL 2300 (3 hrs)', desc: 'Intro to World Religions', grade: '[B-]' },
    position: { x: 15, y: 30 },
    style: { backgroundColor: 'rgba(0, 255, 0, 0.6)' },
    parentNode: 'general',
    extent: 'parent',
    connectable: false,
  },
  {
    id: 'phi2010',
    type: 'custom',
    data: { label: 'PHI 2010 (3 hrs)', desc: 'Introduction to Philosophy', grade: '[A]' },
    position: { x: 185, y: 30 },
    style: { backgroundColor: 'rgba(0, 255, 0, 0.6)' },
    parentNode: 'general',
    extent: 'parent',
    connectable: false,
  },
  {
    id: 'phy2012',
    type: 'custom',
    data: { label: 'PHY 2012 (3 hrs)', desc: 'Intro to Psychological Science' },
    position: { x: 15, y: 120 },
    style: { backgroundColor: 'rgba(0, 255, 255, 0.6)' },
    parentNode: 'general',
    extent: 'parent',
    connectable: false,
  },
  {
    id: 'language',
    type: 'custom',
    data: { label: 'Foreign Language', desc: '(8 hrs or 2 years high school)' },
    position: { x: 185, y: 120 },
    style: { backgroundColor: 'rgba(0, 0, 0, 0.0)' },
    parentNode: 'general',
    extent: 'parent',
    connectable: false,
  },
  {
    id: 'departmental',
    data: { label: 'Departmental (Computer Science & Engineering) Electives Hardware, Software, Theory - 12 hrs' },
    position: { x: -250, y: 625 }, 
    className: 'light', 
    style: { width: 350, height: 200, backgroundColor: 'rgba(0, 0, 0, 0.0)' },
    connectable: false
  },
  {
    id: 'cse1',
    type: 'custom',
    data: { label: 'CSE Elective (3 hrs)' },
    position: { x: 15, y: 50 },
    style: { fontSize: '14px' },
    parentNode: 'departmental',
    extent: 'parent',
    connectable: false,
  },
  {
    id: 'cse2',
    type: 'custom',
    data: { label: 'CSE Elective (3 hrs)' },
    position: { x: 185, y: 50 },
    style: { fontSize: '14px' },
    parentNode: 'departmental',
    extent: 'parent',
    connectable: false,
  },
  {
    id: 'cse3',
    type: 'custom',
    data: { label: 'CSE Elective (3 hrs)' },
    position: { x: 15, y: 125 },
    style: { fontSize: '14px' },
    parentNode: 'departmental',
    extent: 'parent',
    connectable: false,
  },
  {
    id: 'cse4',
    type: 'custom',
    data: { label: 'CSE Elective (3 hrs)' },
    position: { x: 185, y: 125 },
    style: { fontSize: '14px' },
    parentNode: 'departmental',
    extent: 'parent',
    connectable: false,
  },
  {
    id: 'enc3246',
    type: 'custom',
    data: { label: 'ENC 3246 (3 hrs)', desc: 'Communication for Engineers' },
    position: { x: 135, y: 425 },
    connectable: false,
  },
  {
    id: 'theory',
    type: 'custom',
    data: { label: 'CSE Theory Elective (3 hrs)' },
    position: { x: 135, y: 520 },
    style: { fontSize: '14px' },
    connectable: false,
  },
  {
    id: 'cis4250',
    type: 'custom',
    data: { label: 'CIS 4250 (3 hrs)', desc: 'Ethical Issues and Prof Conduct' },
    position: { x: 135, y: 615 },
    connectable: false,
  },
  {
    id: 'software',
    data: { label: 'Computer Science & Engineering Software Electives - 6 hrs' },
    position: { x: 135, y: 715 }, 
    className: 'light', 
    style: { width: 350, height: 110, backgroundColor: 'rgba(0, 0, 0, 0.0)' },
    connectable: false,
  },
  {
    id: 'sw1',
    type: 'custom',
    data: { label: 'CSE Software Elective (3 hrs)' },
    position: { x: 10, y: 30 },
    style: { fontSize: '14px' },
    parentNode: 'software',
    extent: 'parent',
    connectable: false,
  },
  {
    id: 'sw2',
    type: 'custom',
    data: { label: 'CSE Software Elective (3 hrs)' },
    position: { x: 180, y: 30 },
    style: { fontSize: '14px' },
    parentNode: 'software',
    extent: 'parent',
    connectable: false,
  },
  {
    id: 'internship',
    type: 'custom',
    data: { label: 'Industry Internship', desc: internshipStr },
    position: { x: 550, y: 715 }, 
    style: { width: 300, height: 110, fontSize: '14px', backgroundColor: 'rgba(0, 0, 0, 0.2)' },
    connectable: false,
  },
  {
    id: 'notes',
    type: 'custom',
    data: { label: 'Notes', desc: notesStr },
    position: { x: 900, y: 5 }, 
    style: { width: 300, height: 350, fontSize: '14px', backgroundColor: 'rgba(0, 0, 0, 0.2)' },
    connectable: false,
  },
  {
    id: 'key',
    data: { label: 'Key' },
    position: { x: -480, y: 5 }, 
    style: { width: 180, height: 350, backgroundColor: 'rgba(0, 0, 0, 0.2)' },
    connectable: false,
  },
  {
    id: 'key1',
    type: 'custom',
    data: { label: 'Completed Courses' },
    position: { x: 15, y: 50 },
    style: { fontSize: '14px', backgroundColor: 'rgba(0, 255, 0, 0.6)' },
    parentNode: 'key',
    extent: 'parent',
    connectable: false,
  },
  {
    id: 'key2',
    type: 'custom',
    data: { label: 'Courses In Progress' },
    position: { x: 15, y: 120 },
    style: { fontSize: '14px', backgroundColor: 'rgba(0, 255, 255, 0.6)' },
    parentNode: 'key',
    extent: 'parent',
    connectable: false,
  },
  {
    id: 'key3',
    type: 'custom',
    data: { label: 'Unattempted Courses' },
    position: { x: 15, y: 190 },
    style: { fontSize: '14px', backgroundColor: 'rgba(255, 255, 255, 1)' },
    parentNode: 'key',
    extent: 'parent',
    connectable: false,
  },
  {
    id: 'key4',
    type: 'custom',
    data: { label: 'Unsatisfactory Courses' },
    position: { x: 15, y: 260 },
    style: { fontSize: '14px', backgroundColor: 'rgba(255, 0, 0, 0.6)' },
    parentNode: 'key',
    extent: 'parent',
    connectable: false,
  },
];

const initialEdges: Edge[] = [
  { id: 'english', source: 'enc1101', target: 'enc1102', type: 'step', markerEnd: { type: MarkerType.ArrowClosed, } },
  { id: 'math00', source: 'mac2281', target: 'mac2282', type: 'straight', markerEnd: { type: MarkerType.ArrowClosed, } },
  { id: 'math01', source: 'mac2282', target: 'mac2283', type: 'straight', markerEnd: { type: MarkerType.ArrowClosed, } },
  { id: 'math02', source: 'mac2282', target: 'eng4450', type: 'straight', markerEnd: { type: MarkerType.ArrowClosed, } },
  { id: 'math03', source: 'mac2282', target: 'egn3443', type: 'straight', markerEnd: { type: MarkerType.ArrowClosed, } },
  { id: 'physics00', source: 'mac2281', target: 'phy2048', type: 'straight', markerEnd: { type: MarkerType.ArrowClosed, } },
  { id: 'physics01', source: 'phy2048', target: 'phy2049', type: 'straight', markerEnd: { type: MarkerType.ArrowClosed, } },
  { id: 'cs00', source: 'mac2281', target: 'cot3100', type: 'straight', markerEnd: { type: MarkerType.ArrowClosed, } },
  { id: 'cs01', source: 'mac2281', target: 'cop2510', type: 'straight', markerEnd: { type: MarkerType.ArrowClosed, } },
  { id: 'cs02', source: 'cop2510', target: 'cda3103', type: 'straight', markerEnd: { type: MarkerType.ArrowClosed, } },
  { id: 'cs03', source: 'cop2510', target: 'cop3514', type: 'straight', markerEnd: { type: MarkerType.ArrowClosed, } },
  { id: 'cs04', source: 'cda3103', target: 'cda3201', type: 'straight', markerEnd: { type: MarkerType.ArrowClosed, } },
  { id: 'cs05', source: 'cda3103', target: 'cop4530', type: 'straight', markerEnd: { type: MarkerType.ArrowClosed, } },
  { id: 'cs06', source: 'cop3514', target: 'cda3201', type: 'straight', markerEnd: { type: MarkerType.ArrowClosed, } },
  { id: 'cs07', source: 'cop3514', target: 'cop4530', type: 'straight', markerEnd: { type: MarkerType.ArrowClosed, } },
  { id: 'cs08', source: 'cot3100', target: 'cot4400', type: 'straight', markerEnd: { type: MarkerType.ArrowClosed, } },
  { id: 'cs09', source: 'cda3201', target: 'cda4205', type: 'straight', markerEnd: { type: MarkerType.ArrowClosed, } },
  { id: 'cs10', source: 'cop4530', target: 'cop4600', type: 'straight', markerEnd: { type: MarkerType.ArrowClosed, } },
  { id: 'cs11', source: 'cop4530', target: 'cen4020', type: 'straight', markerEnd: { type: MarkerType.ArrowClosed, } },
  { id: 'cs12', source: 'cop4530', target: 'cot4400', type: 'straight', markerEnd: { type: MarkerType.ArrowClosed, } },
  { id: 'cs13', source: 'cop4530', target: 'cnt4419', type: 'straight', markerEnd: { type: MarkerType.ArrowClosed, } },
  { id: 'cs14', source: 'cop4530', target: 'cop4600', type: 'straight', markerEnd: { type: MarkerType.ArrowClosed, } },
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
      >
        <Background />
        <Controls />
      </ReactFlow>
    </div>
  );
}

export default Flow;
