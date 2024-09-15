import { FilterIcon, ShareIcon, SortDescendingIcon } from '@heroicons/react/solid';

const SearchSuggestions = () => {
  return (
    <div className="flex items-center justify-between p-4 mx-10">
      <div className="flex items-center space-x-3">
        <span>Also try searching for</span>
        <button className="px-3 py-2 rounded-md border border-orange-500 bg-white text-orange-500 hover:bg-orange-500 hover:text-white">
          nike*
        </button>
        <button className="px-3 py-2 border border-orange-500 bg-white text-orange-500 hover:bg-orange-500 hover:text-white rounded-md">
          *ike
        </button>
      </div>

      {/* Icons Section */}
      <div className="flex items-center space-x-2 mr-14">
        <button className="flex items-center space-x-2 px-4 py-2 bg-white border border-gray-300 rounded-md hover:bg-gray-200">
          <FilterIcon className="h-5 w-5 text-gray-600" />
          <span>Filter</span>
        </button>

        <button className="flex items-center justify-center w-10 h-10 bg-white border border-gray-300 rounded-full hover:bg-gray-200">
          <ShareIcon className="h-6 w-6 text-gray-600" />
        </button>

        <button className="flex items-center justify-center w-10 h-10 bg-white border border-gray-300 rounded-full hover:bg-gray-200">
          <SortDescendingIcon className="h-6 w-6 text-gray-600" />
        </button>
      </div>
    </div>
  );
};

export default SearchSuggestions;
