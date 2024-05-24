import React from 'react';

type componentPropType = {
    title: string;
    children: React.ReactNode
}

const ProfileSectionComponent = ({ title, children }: componentPropType) => {
    return (
        <div className="bg-gray-700 p-4 my-4 rounded-lg">
            <h2 className="text-xl font-semibold text-white mb-2">{title}</h2>
            <div className="text-gray-300">{children}</div>
        </div>
    );
};

export default ProfileSectionComponent;
