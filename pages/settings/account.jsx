'use client'
import Navbar from '@/components/nav';
import EditDetails from '@/components/popups/editCompany';
import Sidebar from '@/components/sidebar';
import { useState, useEffect } from 'react';

const SettingsPage = () => {
  const [userDetails, setUserDetails] = useState({
    fullName: '',
    fleetCompanyName: '',
    companyRegNumber: '',
    email: '',
    numVehicles: 0,
    numDrivers: 0,
    companyAddress: '',
  });
  const [showPopup, setShowPopup] = useState(false);
  const [notifications, setNotifications] = useState([]);

  const [preference, setPreference] = useState({
    notification: false,
    reminder: false,
    billing: false,
    vehicleStatus: false,
    generalUpdate: false,
    vehicleTracking: false,
    theme: false,
  });
  const handleAdd = (input) => {
    // Add your logic for handling the input here
    console.log('Adding:', input);
    // You can add your custom logic here for adding the value to your list or state
    setShowPopup(false); // Hide the popup after adding the value
  }
  const handleCancel = () => {
    setShowPopup(false); // Hide the popup when canceled
  };  
  useEffect(() => {
    // Fetch user details from the backend
    fetchUserDetails(); // Replace with your actual fetch function
  }, []);

  const fetchUserDetails = async () => {
    try {
      // Replace with your actual endpoint
      const response = await fetch('https://example.com/user/details');
      const data = await response.json();
      setUserDetails(data);
    } catch (error) {
      console.error('Error fetching user details:', error);
    }
  };

  const handleNotificationToggle = () => {
    setPreference((prev) => ({
      ...prev,
      notification: !prev.notification,
    }));
  };

  const handleCheckboxChange = (key) => {
    setPreference((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  return (
    <div className='flex'>
      <Sidebar/>
      <div className="w-full">
      <Navbar/>
      <p className='m-5'>Setting {'>'} Account</p>
    <div className="p-4 flex justify-between gap-4  ">
    <div className='h-full  w-1/2'>
      <div className=" mb-4 border-2 rounded h-full p-5 ">
        <div className='justify-between flex w-full'>
        <p className="text-2xl font-semibold">Profile</p>
        <p className='text-[#2D6C56]' onClick={setShowPopup}>Edit profile</p>
        </div>
        {showPopup && <EditDetails onAdd={handleAdd} onCancel={handleCancel} />}
        <p className='my-3'>Full Name: {userDetails.fullName}</p>
        <p className='my-3'>Fleet Company Name: {userDetails.fleetCompanyName}</p>
        <p className='my-3'>Company Registration Number: {userDetails.companyRegNumber}</p>
        <p className='my-3'>Company Registration Number: {userDetails.companyRegNumber}</p>
        <p className='my-3'>Email: {userDetails.email}</p>
        <p className='my-3'>Number of Vehicles: {userDetails.numVehicles}</p>
        <p className='my-3'>Number of Drivers: {userDetails.numDrivers}</p>
        <p className='my-3'>Company Address: {userDetails.companyAddress}</p>
      </div>
      
      <div className="border-2 rounded h-full p-5">
        <p className="text-2xl font-semibold">Notifications</p>
        <p className='text-sm my-5'>You do not have any notification at the moment.</p>
      </div>
      </div>
      <div  className=" border-2 rounded h-full p-5 w-1/2">
        <p className="text-2xl font-semibold">Preferences</p>
        <label className="block mt-5 mb-3 ">
          Notification 
          <input
            type="checkbox"
            checked={preference.notification}
            onChange={() => handleCheckboxChange('notification')}
            className='ml-2 '
          />
          <br />
          <small>You will not receive notifications when turned off</small>
        </label>
        <p>Check the boxes blow to modify notifications</p>
        <label className="block my-5">
        Reminder
          <input
            type="checkbox"
            checked={preference.reminder}
            onChange={() => handleCheckboxChange('reminder')}
            className="ml-2"
          />
         
        </label>
        <label className="block border-t-2 p-5">
        Billing
          <input
            type="checkbox"
            checked={preference.billing}
            onChange={() => handleCheckboxChange('billing')}
            className="ml-2"
          />
        
        </label>
        <label className="block   p-5 border-y-2">
        Vehicle Status
          <input
            type="checkbox"
            checked={preference.vehicleStatus}
            onChange={() => handleCheckboxChange('vehicleStatus')}
            className="ml-2"
          />
          
        </label>
        <label className="block  p-5 border-b-2">
        General Update
          <input
            type="checkbox"
            checked={preference.generalUpdate}
            onChange={() => handleCheckboxChange('generalUpdate')}
            className="ml-2"
          />
          
        </label>
        <label className="block p-5   border-b-2">
        Vehicle Tracking
          <input
            type="checkbox"
            checked={preference.vehicleTracking}
            onChange={() => handleCheckboxChange('vehicleTracking')}
            className="ml-2"
          />
          
        </label>
        <label className="  p-5 flex border-b-2">
        Theme:
         <img src="images/day.png" alt=""className="w-6 h-6 ml-2" />
          
        </label>
        <div className='text-red-800 p-5 font-bold'>
          <a href="">Delete Account</a>
        </div>
      </div>
      </div>
      </div>
    </div>
  );
};

export default SettingsPage;
