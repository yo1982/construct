
import React from 'react';
import { INVENTORY_DATA } from '../constants';

const Inventory: React.FC = () => {
  return (
    <div className="bg-secondary rounded-lg border border-border overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full text-left">
          <thead className="bg-secondary border-b border-border">
            <tr>
              <th className="p-4 font-semibold">Item Name</th>
              <th className="p-4 font-semibold">SKU</th>
              <th className="p-4 font-semibold">Quantity</th>
              <th className="p-4 font-semibold">Location</th>
              <th className="p-4 font-semibold">Last Updated</th>
            </tr>
          </thead>
          <tbody>
            {INVENTORY_DATA.map((item, index) => (
              <tr key={item.id} className={`border-b border-border ${index === INVENTORY_DATA.length - 1 ? 'border-b-0' : ''}`}>
                <td className="p-4 font-medium">{item.name}</td>
                <td className="p-4 text-text-secondary">{item.sku}</td>
                <td className="p-4">
                  <span className={`font-bold ${item.quantity < 200 ? 'text-red-400' : 'text-text-primary'}`}>
                    {item.quantity} {item.unit}
                  </span>
                </td>
                <td className="p-4 text-text-secondary">{item.location}</td>
                <td className="p-4 text-text-secondary">{item.lastUpdated}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Inventory;
