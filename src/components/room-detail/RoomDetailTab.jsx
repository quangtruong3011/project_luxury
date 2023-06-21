import React, { useState } from 'react';
import "./RoomDetailTab.css"
function RoomDetailTab() {
    const [activeTab, setActiveTab] = useState('overview');

    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };

    return (
        <div className="container mx-auto">
            <div className="grid grid-cols-4">
                <div className="col-span-1">
                    <div className="flex flex-col">
                        <button
                            className={`p-4 pl-0 text-start font-bold border-b border-gray-300 focus:outline-none ${activeTab === 'overview' ? 'text-[#e1bd85]' : ''
                                }`}
                            onClick={() => handleTabClick('overview')}
                        >
                            OVERVIEW
                        </button>
                        <button
                            className={`p-4 pl-0 text-start font-bold border-b border-gray-300 focus:outline-none ${activeTab === 'amenities' ? 'text-[#e1bd85]' : ''
                                }`}
                            onClick={() => handleTabClick('amenities')}
                        >
                            AMENITIES
                        </button>
                        <button
                            className={`p-4 pl-0 text-start font-bold border-b border-gray-300 focus:outline-none ${activeTab === 'package' ? 'text-[#e1bd85]' : ''
                                }`}
                            onClick={() => handleTabClick('package')}
                        >
                            PACKAGE
                        </button>
                        <button
                            className={`p-4 pl-0 text-start font-bold border-b border-gray-300 focus:outline-none ${activeTab === 'rates' ? 'text-[#e1bd85]' : ''
                                }`}
                            onClick={() => handleTabClick('rates')}
                        >
                            RATES
                        </button>
                        <button
                            className={`p-4 pl-0 text-start font-bold border-b border-gray-300 focus:outline-none ${activeTab === 'calendar' ? 'text-[#e1bd85]' : ''
                                }`}
                            onClick={() => handleTabClick('calendar')}
                        >
                            CALENDAR
                        </button>
                    </div>
                </div>
                <div className="col-span-3">
                    {/* Nội dung tương ứng với tab được chọn */}
                    {activeTab === 'overview'
                        && <div className="overview p-4 pr-0">
                            <div className='room-detail_overview'>
                                <h5 className='uppercase font-medium mb-2'>de Finibus Bonorum et Malorum", written by Cicero in 45 BC</h5>
                                <p>Located in the heart of Aspen with a unique blend of contemporary luxury and historic heritage, deluxe accommodations, superb amenities, genuine hospitality and dedicated service for an elevated experience in the Rocky Mountains.</p>
                                <div className='grid grid-cols-2 gap-4 mt-4'>
                                    <div>
                                        <h6 className="font-medium">SPECIAL ROOM</h6>
                                        <ul className="list-disc pl-6">
                                            <li>Max: 4 Person(s)</li>
                                            <li>Size: 35 m2 / 376 ft2</li>
                                            <li>View: Ocen</li>
                                            <li>Bed: King-size or twin beds</li>
                                        </ul>
                                    </div>
                                    <div>
                                        <h6 className="font-medium">SERVICE ROOM</h6>
                                        <ul className="list-disc pl-6">
                                            <li>Oversized work desk</li>
                                            <li>Hairdryer</li>
                                            <li>Iron/ironing board upon request</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>}
                    {activeTab === 'amenities' && <div className="p-4">Nội dung của tab AMENITIES</div>}
                    {activeTab === 'package' && <div className="p-4">Nội dung của tab </div>}
                    {activeTab === 'rates' && <div className="p-4">Nội dung của tab </div>}
                    {activeTab === 'calendar' && <div className="p-4">Nội dung của tab </div>}
                </div>
            </div>
        </div>
    );
}

export default RoomDetailTab;