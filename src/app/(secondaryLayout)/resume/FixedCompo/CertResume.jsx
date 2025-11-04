


'use client';
import React from 'react';
import Title from '../../../(mainlayout)/H&F/Title';
import Title2 from '../SharedCompoResume/Title2';
import {
  useGetEducationQuery,
  useGetExperienceQuery,
  useGetSkillsQuery,
  useGetOfficeTourQuery,
} from '../../../api/upload/dataApi';
import YouTubePlayer from '../../../COMPO/YoutubePlayer';

export default function CertResume() {
  const { data: education = [], isLoading: loadingEdu } = useGetEducationQuery();
  const { data: experience = [], isLoading: loadingExp } = useGetExperienceQuery();
  const { data: skills = [], isLoading: loadingSkills } = useGetSkillsQuery();
  const { data: officeTour, isLoading: loadingOffice } = useGetOfficeTourQuery();

  if (loadingEdu || loadingExp || loadingSkills || loadingOffice) {
    return <p className="text-white p-6">Loading resume data...</p>;
  }

  return (
    <div className="px-4 sm:px-6 md:px-10 lg:px-20">
      {/* Education & Experience */}
      <div className="flex flex-col lg:flex-row justify-center gap-10 py-14">
        {/* Education */}
        <div className="flex flex-col items-center w-full lg:w-1/2">
          <div className="text-[#6A221C]">
            <Title voda="Education" />
          </div>
          <div className="flex pt-6 flex-col gap-6">
            {education.map((chumu) => (
              <div
                key={chumu.id}
                className="bg-gradient-to-br from-gray-800 to-[#76929E] border-l-4 border-green-500 rounded-xl p-6 shadow-md hover:shadow-xl transition duration-300 ease-in-out"
              >
                <h3 className="text-xl font-bold text-white mb-1">{chumu.degree}</h3>
                <p className="text-sm text-gray-100 mb-2 italic">
                  {chumu.institution} / {chumu.duration}
                </p>
                <p className="text-gray-200 text-sm leading-relaxed">{chumu.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Experience */}
        <div className="flex flex-col items-center w-full lg:w-1/2">
          <div className="text-[#2196F3] opacity-70">
            <Title voda="Experience" />
          </div>
          <div className="flex pt-6 flex-col gap-6">
            {experience.map((chumu) => (
              <div
                key={chumu.id}
                className="bg-gradient-to-br from-gray-800 to-[#76929E] border-l-4 border-green-500 rounded-xl p-6 shadow-md hover:shadow-xl transition duration-300 ease-in-out"
              >
                <h3 className="text-xl font-bold text-white mb-1">{chumu.title}</h3>
                <p className="text-sm text-gray-100 mb-2 italic">
                  {chumu.company} / {chumu.duration}
                </p>
                <p className="text-gray-200 text-sm leading-relaxed">{chumu.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Skills */}
      <div className="flex flex-col py-10 items-center gap-8">
        <div className="text-[#6B3FB9]">
          <Title2 gud="My level of knowledge in some tools" voda="My Skills" />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 w-full max-w-5xl">
          {skills.map((chumu) => (
            <div key={chumu.id}>
              <div className="flex justify-between mb-1">
                <span className="font-medium">{chumu.name}</span>
                <span className="text-green-400 font-medium">{chumu.level}%</span>
              </div>
              <div className="bg-gray-700 rounded-full h-3 overflow-hidden">
                <div
                  className="bg-gradient-to-r from-green-400 to-green-600 h-3 rounded-full transition-all duration-1000 ease-out"
                  style={{ width: `${chumu.level}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Office Tour */}
      <div className="flex flex-col lg:flex-row justify-center items-center gap-10 py-10">
        <div className="flex flex-col gap-6 max-w-xl w-full">
          <h2 className="text-2xl sm:text-3xl font-bold">{officeTour.title}</h2>
          <div className="space-y-2 text-gray-300 text-sm sm:text-base">
            {officeTour.description.map((chumu, idx) => (
              <p key={idx}>{chumu}</p>
            ))}
          </div>
        </div>
        <div className="w-full max-w-xl">
          <YouTubePlayer videoId="hWaNoK3gN6M" />
        </div>
      </div>
    </div>
  );
}
