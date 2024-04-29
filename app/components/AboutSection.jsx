"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
    {
        title : "Skills",
        id: "skills",
        content: (
            <ul className="list-disc pl-2">
                <li>HTML/CSS</li>
                <li>Javascript</li>
                <li>ReactJs</li>
                <li>NextJs</li>
                <li>Resposive Web Design</li>
                <li>Web Vitals</li>
                <li>REST/JSON</li>
                <li>GIT/GITHUB</li>
            </ul>
        )
    },
    {
        title : "Education",
        id: "education",
        content: (
            <div className='flex flex-col justify-start'>
                <h2 className="text-white text-xl font-bold mb-2">JNTU Kakinada (2016-2020)</h2>
                <p className="text-[#ADB7BE] text-baselg:text-md">Computer Science and Engineering</p>
            </div>
        )
    },
    {
        title : "Experience",
        id: "experience",
        content: (
            <div className="flex flex-col justify-start">
                <div className="flex flex-col mb-4">
                    <div className="flex justify-between items-center mb-2">
                        <h2 className="text-white text-xl font-bold">Testsigma Technologies Limited</h2>
                        <p className="text-[#ADB7BE] text-base lg:text-md">June 2023 - Current</p>
                    </div>
                    <ul className="list-disc pl-4">
                        <li>Successfully migrated all PHP static pages to Next.js, utilizing reusable components.</li>
                        <li>Developed an academy within the company's platform using Next.js, enabling users to complete courses.</li>
                        <li>Enhanced the performance of the TestSigma website from 34% to 96%.</li>
                        <li>Worked closely with designers, developers, and other stakeholders to meet project requirements and deadlines.</li>
                        <li>Implemented best practices for search engine optimization (SEO) and ensuring the website is accessible to users with disabilities.</li>
                    </ul>
                </div>
                <div className="flex flex-col">
                    <div className="flex justify-between items-center mb-2">
                        <h2 className="text-white text-xl font-bold">Antares systems Pvt Limited</h2>
                        <p className="text-[#ADB7BE] text-base lg:text-md">Oct 2020 - May 2023</p>
                    </div>
                    <ul className="list-disc pl-4">
                        <li>Creating visually appealing and user-friendly interfaces based on design guidelines and best practices.</li>
                        <li>Ensuring that the user interface is responsive and works well on different devices and screen sizes.</li>
                        <li>Ensuring that the user interface works consistently across different browsers.</li>
                        <li>Using version control systems like Git to manage and track changes to the codebase.</li>
                        <li>Staying updated with the latest trends and technologies in UI development to enhance skills and improve performance.</li>
                    </ul>
                </div>
            </div>
        )
    }
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };
  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src="/images/about-image.png" width={500} height={500} />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
            {" "}
            I am a skilled web developer proficient in HTML/CSS, SCSS, and
            JavaScript. I have a strong foundation in responsive web design and
            extensive experience with React.js and Next.js. I am also
            well-versed in working with RESTful APIs and optimizing web
            performance using web vitals.I excel in creating engaging and
            user-friendly web experiences, leveraging my expertise in modern web
            technologies and frameworks to deliver high-quality solutions.
          </p>
          <div className="flex flex-row mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              Skills
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              Education
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("experience")}
              active={tab === "experience"}
            >
              Experience
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
