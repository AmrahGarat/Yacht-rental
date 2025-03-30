import { Rent } from "@/types";
import { Link } from "react-router-dom";
import { paths } from "@/constants/paths";

type SearchRentProps = {
  rent: Rent[] | undefined;
  clearSearch: () => void;
};

export const SearchRent: React.FC<SearchRentProps> = ({
  rent,
  clearSearch,
}) => {
  if (!rent || rent.length === 0) {
    return <p className="text-gray-500 dark:text-gray-400">No rents found</p>;
  }

  return (
    <div className="space-y-2">
      {rent.map((item) => (
        <Link
          key={item._id}
          to={paths.DETAIL(item._id)}
          onClick={clearSearch}
          className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition"
        >
          <img
            src={item.images[0]}
            alt={item.name}
            className="w-10 h-10 rounded-md object-contain "
          />
          <div>
            <p className="text-sm font-medium text-gray-900 dark:text-white">
              {item.name}
            </p>
            <p className="text-xs text-gray-500 dark:text-gray-400">
              ${item.price}
            </p>
          </div>
        </Link>
      ))}
    </div>
  );
};
