import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// api url
const baseUrl = "http://127.0.0.1:8000/api";

// Heroes' Section
export const HomeDetails = createApi({
  reducerPath: "HomeDetails",
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getHomeDetails: builder.query({
      query: () => "/home-api",
    }),
  }),
});

// About
export const AboutMe = createApi({
  reducerPath: "AboutMe",
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getAboutMe: builder.query({
      query: () => "/aboutme-api",
    }),
  }),
});

// Services
export const Services = createApi({
  reducerPath: "Services",
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getServices: builder.query({
      query: () => "/allServices-api",
    }),
  }),
});

// Skills
export const Progress = createApi({
  reducerPath: "Progress",
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getProgress: builder.query({
      query: () => "/progress-api",
    }),
  }),
});

// Projects
export const Projects = createApi({
  reducerPath: "Projects",
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getProjects: builder.query({
      query: () => "/projects-api",
    }),
  }),
});

// Contacts
export const Contacts = createApi({
  reducerPath: "Contacts",
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getContacts: builder.query({
      query: () => "/contacts-api",
    }),
  }),
});

// Social Media
export const SocialMedia = createApi({
  reducerPath: "SocialMedia",
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getSocialMedia: builder.query({
      query: () => "/links-api",
    }),
  }),
});

// Languages Icons
export const LanguagesIcons = createApi({
  reducerPath: "LanguagesIcons",
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getLanguagesIcons: builder.query({
      query: () => "/lang-icons-api",
    }),
  }),
});

export const { useGetHomeDetailsQuery } = HomeDetails;
export const { useGetAboutMeQuery } = AboutMe;
export const { useGetServicesQuery } = Services;
export const { useGetProgressQuery } = Progress;
export const { useGetProjectsQuery } = Projects;
export const { useGetContactsQuery } = Contacts;
export const { useGetSocialMediaQuery } = SocialMedia;
export const { useGetLanguagesIconsQuery } = LanguagesIcons;
