import Search from "./Search";

const UserNavbar = () => {
  const user = "Admin";
  const userProfilePicture = (
    <img
      src="http://tinyurl.com/4up5wbfh"
      alt="User Profile"
      className="rounded-full w-8 h-8 object-cover cursor-pointer"
    />
  );

  return (
    <nav className="flex justify-between items-center bg-gray-100 shadow-md p-5">
      <div className="text-gray-800">
        Logged in as: <span className="font-bold">{user}</span>
      </div>
      <div className="ml-auto flex items-center">
        <Search />
        <div className="ml-4">{userProfilePicture}</div>
      </div>
    </nav>
  );
};

export default UserNavbar;
