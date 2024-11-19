import React, { useState } from 'react';

const Profile = () => {
  const [profileData, setProfileData] = useState({
    name: 'John Doe',
    email: 'john.doe@example.com',
    bio: 'Lorem ipsum dolor sit amet.',
    phone: '123-456-7890',
    address: '123 Street, City, Country',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfileData({ ...profileData, [name]: value });
  };

  return (
    <div className="min-h-screen bg-gray-100 text-black"> {/* Set all text to black here */}
      {/* Header */}
      <header className="bg-gray-800 text-white p-4">
        <nav className="flex justify-between">
          <div className="text-lg font-semibold">Profile</div>
          <div>
            <a href="/home" className="mr-4 hover:text-gray-400">Home</a>
            <a href="/settings" className="mr-4 hover:text-gray-400">Settings</a>
            <a href="/logout" className="hover:text-gray-400">Logout</a>
          </div>
        </nav>
      </header>

      {/* Main Profile Section */}
      <div className="max-w-4xl mx-auto p-8 bg-white shadow-lg rounded-lg mt-6">
        <h2 className="text-2xl font-bold mb-6 text-center">My Profile</h2>

        {/* Profile Picture */}
        <div className="flex justify-center mb-6">
          <div className="w-32 h-32 rounded-full bg-gray-300 flex items-center justify-center text-white text-3xl">
            JD
          </div>
        </div>

        {/* Profile Information */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* Name */}
          <div>
            <label className="block text-sm font-semibold mb-2" htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={profileData.name}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-semibold mb-2" htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={profileData.email}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>

          {/* Bio */}
          <div className="sm:col-span-2">
            <label className="block text-sm font-semibold mb-2" htmlFor="bio">Bio</label>
            <textarea
              id="bio"
              name="bio"
              value={profileData.bio}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded"
              rows="4"
            />
          </div>

          {/* Phone */}
          <div>
            <label className="block text-sm font-semibold mb-2" htmlFor="phone">Phone</label>
            <input
              type="text"
              id="phone"
              name="phone"
              value={profileData.phone}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>

          {/* Address */}
          <div className="sm:col-span-2">
            <label className="block text-sm font-semibold mb-2" htmlFor="address">Address</label>
            <input
              type="text"
              id="address"
              name="address"
              value={profileData.address}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
        </div>

        {/* Save Button */}
        <div className="flex justify-end mt-6">
          <button className="bg-blue-500 text-white py-2 px-6 rounded hover:bg-blue-600">Save Changes</button>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-800 text-white p-4 mt-8">
        <div className="flex justify-between">
          <div>
            <a href="/terms" className="hover:text-gray-400">Terms & Conditions</a>
            <span className="mx-2">|</span>
            <a href="/privacy" className="hover:text-gray-400">Privacy Policy</a>
          </div>
          <div>
            <a href="https://twitter.com" className="mr-4 hover:text-gray-400">Twitter</a>
            <a href="https://facebook.com" className="hover:text-gray-400">Facebook</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Profile;
