import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button"; // Assuming you have a Button component
import { useNavigate } from "react-router-dom";
import { UserIcon } from "lucide-react";
import ShipGame from "@/components/shipgame"; // Import the ShipGame component

type AdminProfileProps = {
  name: string;
  email: string;
  role: string;
};

const AdminProfile = ({ name, email, role }: AdminProfileProps) => {
  const [profilePicture, setProfilePicture] = useState<string | null>(null);
  const [lastLogin, setLastLogin] = useState<string>("");
  const navigate = useNavigate();

  useEffect(() => {
    // Get the current time and format it
    const currentTime = new Date().toLocaleString();
    setLastLogin(currentTime);
  }, []); // Empty dependency array ensures this runs only once when the component mounts

  const handleEditProfile = () => {
    // Handle editing the profile here
    navigate("/admin/edit-profile"); // Navigating to the edit profile page
  };

  const handleProfilePictureChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = event.target.files?.[0]; // Get the first file selected
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfilePicture(reader.result as string); // Set the selected image as the profile picture
      };
      reader.readAsDataURL(file); // Read the file as a data URL
    }
  };
  const [showGame, setShowGame] = useState(false); // Add the state to control game visibility

  return (
    <div className="container mx-auto p-6 space-y-6">
      {/* Profile Info Section */}
      <div className="bg-white shadow-xl rounded-lg p-8 flex flex-col items-center space-y-4">
        <div className="relative w-32 h-32 rounded-full overflow-hidden border-4 border-indigo-500">
          {/* Profile Picture */}
          {profilePicture ? (
            <img
              src={profilePicture}
              alt="Profile"
              className="w-full h-full object-cover"
            />
          ) : (
            <UserIcon className="w-16 h-16 text-gray-600 mx-auto" />
          )}
          {/* Profile Picture Hover Effect */}
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-25 opacity-0 hover:opacity-100 transition-opacity duration-300">
            <input
              type="file"
              onChange={handleProfilePictureChange}
              accept="image/*"
              className="opacity-0 w-full h-full absolute cursor-pointer"
            />
            <span className="text-white text-sm">Change Picture</span>
          </div>
        </div>
        <div className="text-center space-y-2">
          <h2 className="text-2xl font-semibold text-gray-900">{name}</h2>
          <p className="text-gray-600">{role}</p>
          <p className="text-sm text-gray-500">{email}</p>
        </div>
        <Button
          onClick={handleEditProfile}
          className="w-full py-2 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 transition duration-300"
        >
          Edit Profile
        </Button>
        <Button
          onClick={() => setShowGame((prev) => !prev)}
          className="w-full py-2 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition duration-300"
        >
          {showGame ? "Hide Game" : "Play Ship Dodge Game"}
        </Button>

        {showGame && <ShipGame />}
      </div>

      {/* Activity Logs Section */}
      <div className="bg-white shadow-xl rounded-lg p-8">
        <h3 className="text-xl font-semibold text-gray-800 mb-4">
          Recent Activity
        </h3>
        <ul className="space-y-2">
          <li className="text-gray-600">Logged in at {lastLogin}</li>
          {/* You can add more activity logs here */}
        </ul>
      </div>

      {/* System Health/Status Section */}
      <div className="bg-white shadow-xl rounded-lg p-8">
        <h3 className="text-xl font-semibold text-gray-800 mb-4">
          System Status
        </h3>
        <p className="text-gray-600">System is up and running smoothly.</p>
        {/* You can add more health/status information here */}
      </div>

      {/* Notifications Section */}
      <div className="bg-white shadow-xl rounded-lg p-8">
        <h3 className="text-xl font-semibold text-gray-800 mb-4">
          Notifications
        </h3>
        <p className="text-gray-600">You have no new notifications.</p>
        {/* Add more notifications here */}
      </div>

      {/* Analytics Overview Section */}
      <div className="bg-white shadow-xl rounded-lg p-8">
        <h3 className="text-xl font-semibold text-gray-800 mb-4">
          Analytics Overview
        </h3>
        <div className="grid grid-cols-3 gap-6 text-center">
          <div>
            <p className="font-semibold text-lg text-gray-900">
              Total Reservations
            </p>
            <p className="text-2xl text-gray-700">150</p>
          </div>
          <div>
            <p className="font-semibold text-lg text-gray-900">Total Revenue</p>
            <p className="text-2xl text-gray-700">$75,000</p>
          </div>
          <div>
            <p className="font-semibold text-lg text-gray-900">Total Reviews</p>
            <p className="text-2xl text-gray-700">320</p>
          </div>
        </div>
      </div>

      {/* Admin's Last Login Section */}
      <div className="bg-white shadow-xl rounded-lg p-8">
        <h3 className="text-xl font-semibold text-gray-800 mb-4">
          Admin's Last Login
        </h3>
        <p className="text-gray-600">Last logged in on: {lastLogin}</p>
      </div>
    </div>
  );
};

export default AdminProfile;
