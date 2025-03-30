import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import {
  UserIcon,
  Settings,
  Bell,
  Activity,
  BarChart2,
  Clock,
} from "lucide-react";
import ShipGame from "@/components/shipgame";
import { useAppSelector } from "@/hooks/redux";
import { selectUserData } from "@/store/features/userSlice";
import { Spinner } from "@/components/shared/Spinner";

// type UserProfileProps = {
//   name: string;
//   surname: string;
//   email: string;
//   role?: string;
// };

const UserProfile = () => {
  const [profilePicture, setProfilePicture] = useState<string | null>(() => {
    const savedPic = localStorage.getItem("profilePicture");
    return savedPic ? savedPic : null;
  });

  const [lastLogin, setLastLogin] = useState<string>("");
  const [showGame, setShowGame] = useState(false);
  const [notifications, setNotifications] = useState<
    { id: number; message: string; read: boolean }[]
  >([]);
  const navigate = useNavigate();

  useEffect(() => {
    const currentTime = new Date().toLocaleString();
    setLastLogin(currentTime);

    setNotifications([
      { id: 1, message: "Welcome to your profile!", read: false },
      { id: 2, message: "Complete your profile setup", read: true },
      { id: 3, message: "Explore our new features", read: false },
    ]);
  }, []);

  const { user, loading } = useAppSelector(selectUserData);

  if (loading) {
    return <Spinner />;
  }
  console.log(user);

  const handleEditProfile = () => {
    navigate("/user/edit-profile");
  };

  const handleProfilePictureChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const pictureData = reader.result as string;
        setProfilePicture(pictureData);
        localStorage.setItem("profilePicture", pictureData);
      };
      reader.readAsDataURL(file);
    }
  };

  const markNotificationAsRead = (id: number) => {
    setNotifications(
      notifications.map((notification) =>
        notification.id === id ? { ...notification, read: true } : notification
      )
    );
  };

  const removeProfilePicture = () => {
    setProfilePicture(null);
    localStorage.removeItem("profilePicture");
  };

  return (
    <div className="container mx-auto p-4 md:p-6 space-y-6">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Profile Card */}
        <div className="bg-white shadow-xl rounded-xl p-6 flex flex-col items-center space-y-4 lg:col-span-1">
          <div className="relative w-32 h-32 rounded-full overflow-hidden border-4 border-indigo-500 group">
            {profilePicture ? (
              <img
                src={profilePicture}
                alt="Profile"
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="w-full h-full bg-indigo-100 flex items-center justify-center">
                <UserIcon className="w-16 h-16 text-indigo-600" />
              </div>
            )}
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-25 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <input
                type="file"
                onChange={handleProfilePictureChange}
                accept="image/*"
                className="opacity-0 w-full h-full absolute cursor-pointer"
              />
              <span className="text-white text-sm font-medium">
                {profilePicture ? "Change" : "Add"} Picture
              </span>
            </div>
          </div>

          <div className="text-center space-y-2">
            <h2 className="text-2xl font-bold text-gray-900">
              {user?.name} {user?.surname}
            </h2>
            <p className="text-indigo-600 bg-indigo-50 px-3 py-1 rounded-full text-sm font-medium">
              {user?.role}
            </p>
            <p className="text-gray-600">{user?.email}</p>
          </div>

          <div className="w-full space-y-3">
            <Button
              onClick={handleEditProfile}
              className="w-full flex items-center justify-center gap-2"
            >
              <Settings className="w-4 h-4" />
              Edit Profile
            </Button>
            {profilePicture && (
              <Button
                onClick={removeProfilePicture}
                variant="outline"
                className="w-full text-red-600 hover:text-red-700"
              >
                Remove Picture
              </Button>
            )}
            <Button
              onClick={() => setShowGame((prev) => !prev)}
              variant="outline"
              className="w-full bg-secondary"
            >
              {showGame ? "Hide Game" : "Play Ship Game"}
            </Button>
          </div>
        </div>

        {/* Stats Overview */}
        <div className="bg-white shadow-xl rounded-xl p-6 lg:col-span-2">
          <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
            <BarChart2 className="w-5 h-5 text-indigo-600" />
            User Statistics
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              {
                title: "Total Orders",
                value: "15",
                change: "+2%",
                positive: true,
              },
              {
                title: "Total Spent",
                value: "$1,250",
                change: "+15%",
                positive: true,
              },
              {
                title: "Wishlist Items",
                value: "8",
                change: "-1",
                positive: false,
              },
            ].map((stat, index) => (
              <div key={index} className="bg-gray-50 p-4 rounded-lg">
                <p className="text-sm font-medium text-gray-500">
                  {stat.title}
                </p>
                <p className="text-2xl font-bold text-gray-900 mt-1">
                  {stat.value}
                </p>
                <p
                  className={`text-sm mt-1 ${
                    stat.positive ? "text-green-600" : "text-red-600"
                  }`}
                >
                  {stat.change} from last month
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {showGame && (
        <div className="bg-white shadow-xl rounded-xl p-6">
          <ShipGame />
        </div>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Activity Log */}
        <div className="bg-white shadow-xl rounded-xl p-6">
          <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
            <Activity className="w-5 h-5 text-indigo-600" />
            Recent Activity
          </h3>
          <ul className="space-y-4">
            <li className="flex items-start gap-3">
              <div className="bg-indigo-100 p-2 rounded-full">
                <Clock className="w-4 h-4 text-indigo-600" />
              </div>
              <div>
                <p className="font-medium">Account created</p>
                <p className="text-sm text-gray-500">{lastLogin}</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <div className="bg-green-100 p-2 rounded-full">
                <Activity className="w-4 h-4 text-green-600" />
              </div>
              <div>
                <p className="font-medium">Profile completed</p>
                <p className="text-sm text-gray-500">50% complete</p>
              </div>
            </li>
          </ul>
        </div>

        {/* Notifications */}
        <div className="bg-white shadow-xl rounded-xl p-6">
          <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
            <Bell className="w-5 h-5 text-indigo-600" />
            Notifications
          </h3>
          {notifications.length > 0 ? (
            <ul className="space-y-3">
              {notifications.map((notification) => (
                <li
                  key={notification.id}
                  className={`p-3 rounded-lg ${
                    notification.read ? "bg-gray-50" : "bg-indigo-50"
                  } cursor-pointer`}
                  onClick={() => markNotificationAsRead(notification.id)}
                >
                  <p
                    className={`font-medium ${
                      notification.read ? "text-gray-600" : "text-indigo-700"
                    }`}
                  >
                    {notification.message}
                  </p>
                  <p className="text-xs text-gray-500 mt-1">
                    {new Date().toLocaleTimeString()}
                  </p>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-gray-500">No new notifications</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
