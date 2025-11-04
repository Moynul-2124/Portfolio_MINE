



"use client";
import React from "react";
import CVManager from "../Shared/CVManager";
import { FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";
import {
  useGetPostsQuery,
  useGetCommentsQuery,
  useGetProfileQuery,
} from "../../../../api/upload/dataApi";

export default function HeroAbout() {
  const { data: posts = [], isLoading: loadingPosts } = useGetPostsQuery();
  const { data: comments = [], isLoading: loadingComments } = useGetCommentsQuery();
  const { data: profile, isLoading: loadingProfile } = useGetProfileQuery();

  const isLoading = loadingPosts || loadingComments || loadingProfile;

  return (
    <div className="pt-10 px-4 sm:px-6 md:px-10">
      {isLoading ? (
        <p className="text-white p-6">Loading...</p>
      ) : (
        <ul className="flex flex-col gap-10">
          {posts?.map((post) => (
            <li key={post.id} className="bg-black py-12 min-h-screen">
              <div className="flex flex-col lg:flex-row items-center gap-10">
                {/* Image Section */}
                <div className="w-full lg:w-1/2 flex justify-center">
                  <img
                    src={post.image}
                    alt="Myself"
                    className="rounded-r-[79px] w-[300px] sm:w-[350px] md:w-[400px] object-cover"
                  />
                </div>

                {/* Content Section */}
                <div className="w-full lg:w-1/2 flex flex-col gap-6 text-white">
                  <h1 className="text-xl font-bold text-green-500 hover:animate-bounce">
                    {post.views}
                  </h1>

                  <h1 className="text-2xl sm:text-3xl font-extrabold tracking-wide opacity-90">
                    {post.title}
                  </h1>

                  <div className="space-y-4">
                    {comments?.map((comment) => (
                      <div key={comment.id}>
                        <p className="text-gray-300 border-b-2 pb-4 tracking-wider opacity-70">
                          {comment.await}
                        </p>
                      </div>
                    ))}
                  </div>

                  {/* Profile Info */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-gray-400">
                    <div className="space-y-2">
                      <p>
                        <span className="font-bold text-white">Name:</span> {profile?.name}
                      </p>
                      <p>
                        <span className="font-bold text-white">Age:</span> {profile?.age}
                      </p>
                    </div>
                    <div className="space-y-2">
                      <p>
                        <span className="font-bold text-white">Email:</span> {profile?.email}
                      </p>
                      <p>
                        <span className="font-bold text-white">From:</span> {profile?.from}
                      </p>
                    </div>
                  </div>

                  {/* CV + Socials */}
                  <div className="flex flex-col sm:flex-row justify-between items-center mt-6 gap-6">
                    <CVManager />
                    <div className="flex gap-4">
                      <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                        <FaTwitter className="text-white text-2xl hover:text-green-400" />
                      </a>
                      <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                        <FaLinkedin className="text-white text-2xl hover:text-green-400" />
                      </a>
                      <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                        <FaGithub className="text-white text-2xl hover:text-green-400" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
