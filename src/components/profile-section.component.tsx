import React from 'react';

type componentPropType = {
    title: string;
    children: React.ReactNode
}

const ProfileSectionComponent = ({ title, children }: componentPropType) => {
    return (
        <div className={'flex flex-col gap-3'}>
            <h1 className={"border-b border-border-color text-xl font-bold pb-2"}>{title}</h1>
            <div className="text-gray-300 flex flex-col gap-2">{children}</div>
        </div>
    );
};

export default ProfileSectionComponent;
