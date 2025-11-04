


import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const dataApi = createApi({
  reducerPath: 'dataApi',
  baseQuery: fetchBaseQuery({ 
    baseUrl: process.env.NEXT_PUBLIC_API_URL,
  }),
  endpoints: (builder) => ({
    getPosts: builder.query({ query: () => 'posts' }),
    getComments: builder.query({ query: () => 'comments' }),
    getProfile: builder.query({ query: () => 'profile' }),
    getTitle: builder.query({ query: () => 'title' }),
    getServices: builder.query({ query: () => 'services' }),
    getTestimonials: builder.query({ query: () => 'testimonials' }),
    getPlans: builder.query({ query: () => 'plans' }),
    getEducation: builder.query({ query: () => 'education' }),
    getExperience: builder.query({ query: () => 'experience' }),
    getSkills: builder.query({ query: () => 'skills' }),
    getOfficeTour: builder.query({ query: () => 'officeTour' }),
    getCategories: builder.query({ query: () => 'categories' }),
    getItems: builder.query({ query: () => 'items' }),
    getBlogs: builder.query({ query: () => 'blogs' }),
    getPostss: builder.query({ query: () => 'postss' }),
    getId: builder.query({ query: () => 'id' }),
    getHeading: builder.query({ query: () => 'heading' }),
    getFormFields: builder.query({ query: () => 'formFields' }),
    getContactInfo: builder.query({ query: () => 'contactInfo' }),
  }),
});
export const {
  useGetPostsQuery,
  useGetCommentsQuery,
  useGetProfileQuery,
  useGetTitleQuery,
  useGetServicesQuery,
  useGetTestimonialsQuery,
  useGetPlansQuery,
  useGetEducationQuery,
  useGetExperienceQuery,
  useGetSkillsQuery,
  useGetOfficeTourQuery,
  useGetCategoriesQuery,
  useGetItemsQuery,
  useGetBlogsQuery,
  useGetPostssQuery,
  useGetIdQuery,
  useGetHeadingQuery,
  useGetFormFieldsQuery,
  useGetContactInfoQuery,
} = dataApi;
