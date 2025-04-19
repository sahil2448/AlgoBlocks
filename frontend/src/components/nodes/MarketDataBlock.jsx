export const MarketDataBlock = ({ data }) => {
    return (
      <div className="p-4 bg-yellow-100 rounded shadow text-center min-w-[150px]">
        <Handle type="target" position="top" style={{ background: '#333' }} />
        <div className="font-semibold text-yellow-800">📊 Market Data</div>
        <div className="text-xs mt-1">Asset: {data.asset || 'AAPL'}</div>
        <Handle type="source" position="bottom" style={{ background: '#333' }} />
      </div>
    );
  };