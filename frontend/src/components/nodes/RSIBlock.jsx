// import React from 'react';
// import { Handle } from 'reactflow';

// const RSIBlock = ({ data }) => {
//   return (
//     <div className="p-4 bg-blue-200 rounded shadow text-sm min-w-[150px] text-center">
//       {/* Incoming connection handle */}
//       <Handle
//         type="target"
//         position="top"
//         style={{ background: '#333' }}
//         id="rsi-target"
//       />

//       <div className="font-semibold text-blue-900">📈 RSI Block</div>
//       <div className="text-xs mt-1">
//         Period: {data.period || 14}
//       </div>

//       {/* Outgoing connection handle */}
//       <Handle
//         type="source"
//         position="bottom"
//         style={{ background: '#333' }}
//         id="rsi-source"
//       />
//     </div>
//   );
// };

// export { RSIBlock };


// frontend/src/components/nodes/RSIBlock.jsx
// import React from 'react';
// import { Handle } from 'reactflow';

// export const RSIBlock = ({ data }) => {
//   return (
//     <div className="p-4 bg-blue-200 rounded shadow text-sm min-w-[150px] text-center">
//       {/* Incoming connection */}
//       <Handle type="target" position="top" style={{ background: '#333' }} id="rsi-target" />
      
//       <div className="font-semibold text-blue-900">📈 RSI Block</div>
//       <div className="text-xs mt-1">Period: {data.period || 14}</div>
      
//       {/* Outgoing connection */}
//       <Handle type="source" position="bottom" style={{ background: '#333' }} id="rsi-source" />
//     </div>
//   );
// };


import React from 'react';
import { Handle } from 'reactflow';

export const RSIBlock = ({ data }) => (
  <div className="p-4 bg-blue-200 rounded shadow text-center min-w-[150px]">
    <Handle type="target" position="top" style={{ background: '#333' }} />
    <div className="font-semibold text-blue-900">📈 RSI</div>
    <div className="text-xs mt-1">Period: {data.period || 14}</div>
    <Handle type="source" position="bottom" style={{ background: '#333' }} />
  </div>
);
