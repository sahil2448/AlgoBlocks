// src/components/BlockConfigModal.jsx
import React, { useState } from 'react';
import { Dialog } from '@headlessui/react';

const BlockConfigModal = ({ node, isOpen, onClose, onSave }) => {
  const [formData, setFormData] = useState(node.data || {});

  const handleChange = (key, value) => {
    setFormData((prev) => ({ ...prev, [key]: value }));
  };

  const handleSubmit = () => {
    onSave(node.id, formData);
    onClose();
  };

  return (
    <Dialog open={isOpen} onClose={onClose} className="fixed z-50 inset-0 overflow-y-auto">
      <div className="flex items-center justify-center min-h-screen bg-black bg-opacity-30 p-4">
        <Dialog.Panel className="bg-white rounded-lg shadow-xl p-6 w-full max-w-md">
          <Dialog.Title className="text-lg font-bold mb-4">Edit Block: {formData.label}</Dialog.Title>
          <div className="space-y-3">
            {Object.entries(formData)
              .filter(([k]) => k !== 'label' && k !== 'onEdit' && k !== 'onDelete')
              .map(([key, value]) => (
                <div key={key}>
                  <label className="block text-sm font-medium mb-1">{key}</label>
                  <input
                    className="w-full border border-gray-300 rounded px-2 py-1 text-sm"
                    value={value}
                    onChange={(e) => handleChange(key, e.target.value)}
                  />
                </div>
              ))}
          </div>
          <div className="mt-6 flex justify-end gap-2">
            <button
              onClick={onClose}
              className="px-4 py-2 text-sm bg-gray-200 hover:bg-gray-300 rounded"
            >
              Cancel
            </button>
            <button
              onClick={handleSubmit}
              className="px-4 py-2 text-sm bg-blue-600 text-white hover:bg-blue-700 rounded"
            >
              Save
            </button>
          </div>
        </Dialog.Panel>
      </div>
    </Dialog>
  );
};

export default BlockConfigModal;
