import { memo, FC, CSSProperties } from 'react';
import { Handle, Position, NodeProps } from 'reactflow';

const sourceHandleStyleA: CSSProperties = {  };

const CustomNode: FC<NodeProps> = ({ data, xPos, yPos }) => {
  return (
    <>
      <Handle type="target" position={Position.Top} />
      <div>
        <div>
          {data.label}
        </div>
        <div>
          {data.desc}
        </div>
        <div>
          {data.grade}
        </div>
        <div>
          {xPos.toFixed(0)},    {yPos.toFixed(0)}
        </div>
      </div>

      <Handle
        type="source"
        position={Position.Bottom}
        id="a"
        style={sourceHandleStyleA}
      />
    </>
  );
};

export default memo(CustomNode);
