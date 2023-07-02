import { useState } from "react";

function DropdownMenu() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="relative">
            {/* Button */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="inline-flex items-center justify-center w-full px-4 py-2 text-base font-medium text-gray-700 bg-gray-100 rounded-md hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
            >
                Menu
                {/* Icon */}
                <svg
                    className="-mr-1 ml-2 h-5 w-5"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                >
                    <path
                        fillRule="evenodd"
                        d="M10.2929 14.2929C10.6834 13.9024 11.3166 13.9024 11.7071 14.2929L15.7071 18.2929C16.0976 18.6834 16.0976 19.3166 15.7071 19.7071C15.3166 20.0976 14.6834 20.0976 14.2929 19.7071L10 15.4142L5.70711 19.7071C5.31658 20.0976 4.68342 20.0976 4.29289 19.7071C3.90237 19.3166 3.90237 18.6834 4.29289 18.2929L8.29289 14.2929C8.68342 13.9024 9.31658 13.9024 9.70711 14.2929L9.70711 14.2929Z"
                        clipRule="evenodd"
                    />
                    <path
                        fillRule="evenodd"
                        d="M10.2929 5.70711C9.90237 6.09763 9.90237 6.7308 10.2929 7.12132L14.2929 11.1213C14.6834 11.5118 15.3166 11.5118 15.7071 11.1213C16.0976 10.7308 16.0976 10.0976 15.7071 9.70711L11.7071 5.70711C11.3166 5.31658 10.6834 5.31658 10.2929 5.70711L10.2929 5.70711Z"
                        clipRule="evenodd"
                    />
                    <path
                        fillRule="evenodd"
                        d="M5.70711 11.1213C6.09763 10.7308 6.7308 10.7308 7.12132 11.1213L11.1213 15.1213C11.5118 15.5118 11.5118 16.145 11.1213 16.5355C10.7308 16.926 10.0976 16.926 9.70711 16.5355L5.70711 12.5355C5.31658 12.145 5.31658 11.5118 5.70711 11.1213L5.70711 11.1213Z"
                        clipRule="evenodd"
                    />
                </svg>
            </button>

            {/* Dropdown menu */}
            {isOpen && (
                <div className="absolute right-0 w-48 mt-2 origin-top-right bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                        <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem">Option 1</a>
                        <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem">Option 2</a>
                        <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem">Option 3</a>
                    </div>
                </div>
            )}
        </div>
    );
}

export default DropdownMenu;