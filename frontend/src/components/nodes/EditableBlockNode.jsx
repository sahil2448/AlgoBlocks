// // src/components/nodes/EditableBlockNode.jsx
// import React from 'react';
// import { Handle, Position } from 'reactflow';
// import { Edit3, Trash2 } from 'lucide-react';

// export default function EditableBlockNode({ data, isConnectable, selected }) {
//   return (
//     <div
//       className={`bg-white border rounded-lg shadow p-3 w-60 ${
//         selected ? 'ring-2 ring-blue-400' : ''
//       }`}
//     >
//       <div className="flex justify-between items-center mb-2">
//         <strong>{data.label}</strong>
//         <div className="flex space-x-1">
//           <button onClick={data.onEdit} className="p-1 hover:bg-gray-200 rounded">
//             <Edit3 size={16} />
//           </button>
//           <button onClick={data.onDelete} className="p-1 hover:bg-red-200 rounded">
//             <Trash2 size={16} />
//           </button>
//         </div>
//       </div>
//       {/* Render your parameters here */}
//       {Object.entries(data)
//         .filter(([k]) => !['label','onEdit','onDelete'].includes(k))
//         .map(([k,v]) => (
//           <div key={k} className="text-xs text-gray-600">
//             <strong>{k}:</strong> {v}
//           </div>
//         ))}
//       <Handle type="target" position={Position.Top} isConnectable={isConnectable} />
//       <Handle type="source" position={Position.Bottom} isConnectable={isConnectable} />
//     </div>
//   );
// }

// src/components/nodes/EditableBlockNode.jsx
import React from 'react';
import { Handle, Position } from 'reactflow';

const EditableBlockNode = ({ data }) => {
  return (
    <div className="p-2 rounded-md bg-white shadow-md border border-gray-300 w-48">
      <div className="font-semibold text-sm mb-2 text-center">
        {data.label || 'Block'}
      </div>

      <div className="flex justify-center gap-2 mt-2">
        {data.onEdit && (
          <button
            onClick={data.onEdit}
            className="text-blue-500 hover:underline text-xs"
          >
            Edit
          </button>
        )}
        {data.onDelete && (
          <button
            onClick={data.onDelete}
            className="text-red-500 hover:underline text-xs"
          >
            Delete
          </button>
        )}
      </div>

      <Handle type="target" position={Position.Top} />
      <Handle type="source" position={Position.Bottom} />
    </div>
  );
};

export default EditableBlockNode;
