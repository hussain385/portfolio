import React from 'react';
import ProfileHeaderComponent from "@/components/profile-header.component";
import ProfileSectionComponent from "@/components/profile-section.component";

const ProfileMainCardComponent = () => {
    return (
        <div className="flex bg-gray-900 text-white gap-4">
            <ProfileHeaderComponent />
            <div
                className={"bg-gray-900 p-4 border border-border-color rounded-lg w-full text-sm h-fit flex flex-col gap-4 text-white font-medium"}>
                <p>👋 Hello, I&apos;m Hussain Saifuddin</p>
                <p>🌐 Web & Hybrid Application Developer | 🚀 3+ Years of Crafting Digital Experiences</p>
                <ProfileSectionComponent title={"📌 About Me"}>
                    <p>I&apos;m a dedicated web and hybrid application developer with a solid track record of over 3
                        years in the dynamic world of software development. My journey began with a fascination for
                        technology, and it has since evolved into a true passion for creating innovative and
                        user-centric digital solutions.</p>
                </ProfileSectionComponent>
                <ProfileSectionComponent title={"🚀 My Expertise"}>
                    <p>I specialize in building responsive and high-performance web applications that captivate users
                        and deliver exceptional results. Using cutting-edge front-end technologies like HTML5, CSS3, and
                        JavaScript, I strive to create seamless and visually engaging experiences.</p>
                    <p>📱 Additionally, I excel in hybrid app development, harnessing the power of frameworks like React
                        Native and Flutter to craft cross-platform applications that work seamlessly on both Android and
                        iOS devices.</p>
                </ProfileSectionComponent>
                <ProfileSectionComponent title={"💡 Problem-Solving"}>
                    <p>I thrive on solving complex challenges. Whether it&apos;s optimizing code for performance,
                        troubleshooting intricate bugs, or architecting robust systems, I approach each task with a
                        solution-oriented mindset and an unwavering commitment to quality.</p>
                </ProfileSectionComponent>
                <ProfileSectionComponent title={"🧰 Tech Stack"}>
                    <p>Front-End: HTML5, CSS3, JavaScript, React, Vue.js Mobile App: React Native, Flutter Back-End:
                        Node.js, Express.js, MongoDB Tools: Git, VS Code, JIRA</p>
                </ProfileSectionComponent>
                <ProfileSectionComponent title={"🌍 Open Source Advocate"}>
                    <p>I&apos;m a strong advocate for the open-source community and actively contribute to projects
                        aligned with my interests. You can find my collaborative work on GitHub, where I engage with
                        developers worldwide to make technology more accessible and impactful.</p>
                </ProfileSectionComponent>
                <ProfileSectionComponent title={"📚 Lifelong Learning"}>
                    <p>In the fast-paced tech landscape, continuous learning is key. I&apos;m dedicated to staying
                        up-to-date with the latest industry trends and enhancing my skills to ensure that I deliver
                        top-tier solutions to every project.</p>
                </ProfileSectionComponent>
                <ProfileSectionComponent title={"🤝 Let's Connect"}>
                    <p>I&apos;m always eager to connect with fellow developers, tech enthusiasts, and anyone interested
                        in web and mobile app development. Don&apos;t hesitate to reach out, and let&apos;s embark on a coding
                        journey together!</p>
                </ProfileSectionComponent>
                <div className={'flex flex-col gap-3'}>
                    <h1 className={"border-b border-border-color text-xl font-bold pb-2"}>📫 Contact Me</h1>
                    <p>
                        📧 Email:
                        <a className={'text-blue-500 underline mx-1'} href={'mailto:hussainquetta53@gmail.com'}>hussainquetta53@gmail.com</a>
                        💼 LinkedIn:
                        <a className={'text-blue-500 underline mx-1'} href={"https://www.linkedin.com/in/hussain-saifuddin786/"}>https://www.linkedin.com/in/hussain-saifuddin786/</a>
                        🌐 Portfolio:
                        <a className={'text-blue-500 underline mx-1'} href={"https://hussain-saifuddin.surge.sh/"}>https://hussain-saifuddin.surge.sh/</a>
                    </p>
                </div>
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
