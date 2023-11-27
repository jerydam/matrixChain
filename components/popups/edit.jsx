'use client'
import { useState } from 'react';
import { XIcon } from '@heroicons/react/solid';

const Edit = ({ onAdd, onCancel }) => {
  const [inputValue, setInputValue] = useState('');
  const [num, setNum] = useState('');
  const [mail, setMail] = useState('');
  const [imagePreview, setImagePreview] = useState(null);

  const handleAdd = (e) => {
    onAdd(e);
    setInputValue('');
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };
  

  return (
    <div className="absolute inset-0 bg-gray-500 bg-opacity-100 flex items-center justify-center">
      <div className="bg-white p-6 rounded-md my-5">
        <div className="flex justify-between items-center mb-4">
          <p className="block mb-2 text-lg font-medium">Edit Profile</p>
          <button onClick={onCancel}>
            <XIcon className="h-5 w-5 text-[#2D6C56]" />
          </button>
        </div>
        <p>Edit driver's profile</p>
        <p className='mt-5 mb-3'>License Number</p>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          className="border border-[#2D6C56] px-3 py-2 mb-4 rounded-md w-full"
        />
        <p className='mt-5 mb-3'>Phone Number</p>
        <input
          type="text"
          value={num}
          onChange={(e) => setNum(e.target.value)}
          className="border border-[#2D6C56] px-3 py-2 mb-4 rounded-md w-full"
        />
        <p className='mt-5 mb-3'>Email Address</p>
        <input
          type="email"
          value={mail}
          onChange={(e) => setMail(e.target.value)}
          className="border border-[#2D6C56] px-3 py-2 mb-4 rounded-md w-full"
        />
          <p className='ml-5 mt-2'>Upload Image of Driver/Operator</p>
      <div className="w-20 h-20 bg-gray-200 rounded-full mx-20 my-5 flex items-center justify-center overflow-hidden">
        {imagePreview ? (
          <img
            src={imagePreview}
            alt="Driver Preview"
            style={{ maxWidth: '100%', maxHeight: '100%' }}
          />
        ) : (
          <label htmlFor="driverImage" className="text-gray-500 cursor-pointer hover:text-gray-600">
            <img
              src="/path-to-your-image-icon.png" // Replace with your image icon URL
              alt=""
              className="h-12 w-12"
            />
            <span className="block text-sm mt-1"></span>
            <input
              type="file"
              id="driverImage"
              name="driverImage"
              accept="image/*"
              onChange={handleImageChange} // Make sure you include this event handler
              required
              className="hidden"
            />
          </label>
        )}
      </div>
      
        <div className="flex justify-center">
          <button
            onClick={handleAdd}
            className="border-b-4 border-2 border-[#2D6C56] text-[#2D6C56] font-bold py-2 px-4 rounded"
          >
            Save Change
          </button>
        </div>
      </div>
    </div>
  );
};

export default Edit;
