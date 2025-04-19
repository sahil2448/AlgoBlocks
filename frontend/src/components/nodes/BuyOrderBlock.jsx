// import React from 'react';
// import { Handle } from 'reactflow';

// const BuyOrderBlock = ({ data }) => {
//   return (
//     <div className="p-4 bg-green-200 rounded shadow text-sm min-w-[150px] text-center">
//       {/* Target handle (incoming connection) */}
//       <Handle
//         type="target"
//         position="top"
//         style={{ background: '#333' }}
//         id="a"
//       />

//       <div className="font-semibold text-green-900">🛒 Buy Order</div>
//       <div className="text-xs mt-1">Price: {data.price || 'Market'}</div>
//       <div className="text-xs">Qty: {data.qty || '100'}</div>

//       {/* Source handle (outgoing connection) */}
//       <Handle
//         type="source"
//         position="bottom"
//         style={{ background: '#333' }}
//         id="b"
//       />
//     </div>
//   );
// };

// export { BuyOrderBlock };


// frontend/src/components/nodes/BuyOrderBlock.jsx
// import React from 'react';
// import { Handle } from 'reactflow';

// export const BuyOrderBlock = ({ data }) => {
//   return (
//     <div className="p-4 bg-green-200 rounded shadow text-sm min-w-[150px] text-center">
//       {/* Incoming connection */}
//       <Handle type="target" position="top" style={{ background: '#333' }} id="buyorder-target" />
      
//       <div className="font-semibold text-green-900">🛒 Buy Order</div>
//       <div className="text-xs mt-1">Price: {data.price || 'Market'}</div>
//       <div className="text-xs">Qty: {data.qty || '100'}</div>
      
//       {/* Outgoing connection */}
//       <Handle type="source" position="bottom" style={{ background: '#333' }} id="buyorder-source" />
//     </div>
//   );
// };


import React from 'react';
import { Handle } from 'reactflow';

export const BuyOrderBlock = ({ data }) => (
  <div className="p-4 bg-green-300 rounded shadow text-center min-w-[150px]">
    <Handle type="target" position="top" style={{ background: '#333' }} />
    <div className="font-semibold text-green-900">🛒 Buy Order</div>
    <div className="text-xs mt-1">Price: {data.price || 'Market'}</div>
    <div className="text-xs">Qty: {data.qty || 100}</div>
    <Handle type="source" position="bottom" style={{ background: '#333' }} />
  </div>
);
