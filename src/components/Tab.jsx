import React, { useState } from 'react';
import PropTypes from 'prop-types';

const Tab = ({ child1, child2, child3 }) => {
    const [activeTab, setActiveTab] = useState(0);

    const handleTabClick = (index) => {
        setActiveTab(index);
    };

    return (
        <div className=' w-full border rounded-lg border-event-details-border'>
            <div className=" tab-header p-1 flex-wrap bg-tab-header flex gap-2 text-sm md:text-base font-merriweather ">
                <button
                    className={activeTab === 0 ? 'bg-navbar text-white px-4 py-1 rounded-md' : 'bg-body text-navbar px-4 py-1 rounded-md'}
                    onClick={() => handleTabClick(0)}
                >
                    Event Description
                </button>
                <button
                    className={activeTab === 1 ? 'bg-navbar text-white px-4 py-1 rounded-md' : 'bg-body text-navbar px-4 py-1 rounded-md'}
                    onClick={() => handleTabClick(1)}
                >
                    Announcements
                </button>
                <button
                    className={activeTab === 2 ? 'bg-navbar text-white px-4 py-1 rounded-md' : 'bg-body text-navbar px-4 py-1 rounded-md'}
                    onClick={() => handleTabClick(2)}
                >
                    Rules For Event
                </button>
            </div>
            <div className="tab-content md:px-4 py-5">
                {activeTab === 0 && child1}
                {activeTab === 1 && child2}
                {activeTab === 2 && child3}
            </div>
        </div>
    );
};

Tab.propTypes = {
    child1: PropTypes.node.isRequired,
    child2: PropTypes.node.isRequired,
    child3: PropTypes.node.isRequired,
};

export default Tab;
