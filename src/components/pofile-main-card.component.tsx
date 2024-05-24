import React from 'react';
import ProfileHeaderComponent from "@/components/profile-header.component";
import ProfileSectionComponent from "@/components/profile-section.component";

const ProfileMainCardComponent = () => {
    return (
        <div className="flex flex-col items-center bg-gray-900 text-white p-6 rounded-lg shadow-md">
            <div className="text-center mb-6">
                <ProfileHeaderComponent />
            </div>
            {/*<ProfileSectionComponent title="About Me">*/}
            {/*    <p>I&apos;m a dedicated web and hybrid application developer with a solid track record...</p>*/}
            {/*</ProfileSectionComponent>*/}
            {/*<ProfileSectionComponent title="My Expertise">*/}
            {/*    <ul className="list-disc list-inside">*/}
            {/*        <li>Specialize in building responsive and high-performance web applications...</li>*/}
            {/*        <li>Excel in hybrid app development using React Native and Flutter...</li>*/}
            {/*    </ul>*/}
            {/*</ProfileSectionComponent>*/}
            {/*<ProfileSectionComponent title="Problem-Solving">*/}
            {/*    <p>I thrive on solving complex challenges...</p>*/}
            {/*</ProfileSectionComponent>*/}
            {/*<ProfileSectionComponent title="Tech Stack">*/}
            {/*    <p>Front-End: HTML5, CSS3, JavaScript, React, Vue.js</p>*/}
            {/*    <p>Mobile App: React Native, Flutter</p>*/}
            {/*    <p>Back-End: Node.js, Express.js, MongoDB</p>*/}
            {/*    <p>Tools: Git, VS Code, JIRA</p>*/}
            {/*</ProfileSectionComponent>*/}
            {/*<ProfileSectionComponent title="Open Source Advocate">*/}
            {/*    <p>I&apos;m a strong advocate for the open-source community...</p>*/}
            {/*</ProfileSectionComponent>*/}
            {/*<ProfileSectionComponent title="Lifelong Learning">*/}
            {/*    <p>In the fast-paced tech landscape, continuous learning is key...</p>*/}
            {/*</ProfileSectionComponent>*/}
            {/*<ProfileSectionComponent title="Let's Connect">*/}
            {/*    <p>I&apos;m always eager to connect with fellow developers, tech enthusiasts...</p>*/}
            {/*</ProfileSectionComponent>*/}
            {/*<ProfileSectionComponent title="Contact Me">*/}
            {/*    <p>Email: hussainquetta53@gmail.com</p>*/}
            {/*    <p>LinkedIn: <a href="https://www.linkedin.com/in/hussain-saifuddin786" className="text-blue-400">linkedin.com/in/hussain-saifuddin786</a></p>*/}
            {/*    <p>Portfolio: <a href="https://hussain-saifuddin.surge.sh" className="text-blue-400">hussain-saifuddin.surge.sh</a></p>*/}
            {/*</ProfileSectionComponent>*/}
        </div>
    );
};

export default ProfileMainCardComponent;
