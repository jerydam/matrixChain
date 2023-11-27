import React, { useState } from 'react';
import { XIcon } from '@heroicons/react/solid';
import Image from 'next/image'; // Import Next.js Image component
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const CompleteImg = ({ onCancel, currentPage, handleNext, formData }) => {
  // Access formData fields
  const { companyName, registrationId, officeAddress } = formData;

  const [userImage, setUserImage] = useState(null);
  const [companyLogo, setCompanyLogo] = useState(null);

  const handleUpload = async () => {
    try {
      // Create a new FormData object and append form data
      const formData = new FormData();
      formData.append('company_name', companyName || '');
      formData.append('registration_id', registrationId || '');
      formData.append('address', officeAddress || '');

      // Append image data
      if (userImage) {
        formData.append('profile_picture', userImage);
      }
      if (companyLogo) {
        formData.append('company_logo', companyLogo, 'companyLogo.jpg');
      }

      const userToken = localStorage.getItem('authToken');

      const response = await fetch('https://itekton.onrender.com/fleets/fleets/', {
        method: 'POST',
        headers: {
          Authorization: `Token ${userToken}`,
        },
        body: formData,
      });

      const data = await response.json();

      if (response.ok) {
        const id = data.id;
        localStorage.setItem('userId', id);
        alert(id);
        console.log('Image uploaded successfully');
        toast.success('Image uploaded successfully');
        await handleNext(); // Call handleNext if the upload is successful
      } else {
        console.error('Failed to upload image');
        toast.error(data.details);
        // Handle failure as needed
      }
    } catch (error) {
      console.log('Error uploading image:', error);
    }
  };

  const handleUserImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setUserImage(URL.createObjectURL(file));
    }
  };

  const handleCompanyLogoChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setCompanyLogo(URL.createObjectURL(file));
    }
  };

  const clearUserImage = () => {
    setUserImage(null);
  };

  const clearCompanyLogo = () => {
    setCompanyLogo(null);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-6 rounded-md w-96">
        <div className="p-8">
          <div className="flex justify-between items-center mb-4">
            <p className="text-2xl font-bold mb-4">Complete Your Profile</p>
            <button onClick={onCancel}>
              <XIcon className="h-5 w-5 text-[#2D6C56]" />
            </button>
          </div>
          <p>2. Upload Your Profile Pictures and Company Logo</p>
          <div className="space-y-6 my-4">
            <div className="flex flex-col items-center">
              <p>Upload Company’s Logo</p>
              <div className="w-40 h-40 relative rounded-full border-dotted border-2 border-[#6A6A6A] overflow-hidden">
                <label htmlFor="companyLogo" className="cursor-pointer block">
                  {companyLogo ? (
                    <Image
                      src={companyLogo}
                      alt="Company Logo"
                      className="object-cover w-full h-full"
                      width={40}
                      height={40}
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center">
                      <span className="text-gray-400">Company Logo</span>
                    </div>
                  )}
                  <input
                    type="file"
                    id="companyLogo"
                    name="companyLogo"
                    className="hidden"
                    onChange={handleCompanyLogoChange}
                  />
                </label>
                {companyLogo && (
                  <button
                    className="absolute top-3 right-3 p-1 bg-white rounded-full"
                    onClick={clearCompanyLogo}
                  >
                    X
                  </button>
                )}
              </div>
            </div>
            <div className="flex flex-col items-center">
              <p>Upload Profile Picture</p>
              <div className="w-40 h-40 relative rounded border-dotted border-2 border-[#6A6A6A] overflow-hidden">
                <label htmlFor="userImage" className="cursor-pointer block">
                  {userImage ? (
                    <Image
                      src={userImage}
                      alt="User"
                      className="object-cover w-full h-full"
                      width={40}
                      height={40}
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center">
                      <span className="text-gray-400">User Image</span>
                    </div>
                  )}
                  <input
                    type="file"
                    id="userImage"
                    name="userImage"
                    className="hidden"
                    onChange={handleUserImageChange}
                  />
                </label>
                {userImage && (
                  <button
                    className="absolute top-2 right-2 p-1 bg-white rounded-full"
                    onClick={clearUserImage}
                  >
                    X
                  </button>
                )}
              </div>
            </div>
          </div>
          <div className="flex justify-center mt-8">
            <button
              onClick={handleUpload}
              className="border-b-4 border-2 border-[#2D6C56] text-[#2D6C56] font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Complete Profile
            </button>
          </div>
          <div className="flex justify-center mt-3 space-x-2">
            {[1, 2, 3, 4, 5].map((index) => (
              <div
                key={index}
                className={`h-4 w-4 rounded-full ${
                  currentPage === index ? 'bg-[#2D6C56]' : 'bg-[#D9D9D9]'
                }`}
              ></div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompleteImg;
