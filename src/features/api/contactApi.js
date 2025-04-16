import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const CONTACT_API = `${import.meta.env.VITE_API_URL}/api/v1`;


export const contactApi = createApi({
  reducerPath: "contactApi",
  baseQuery: fetchBaseQuery({ baseUrl: CONTACT_API }),
  endpoints: (builder) => ({
    sendContactMessage: builder.mutation({
      query: (data) => ({
        url: "/contact",
        method: "POST",
        body: data,
      }),
    }),
  }),
});

export const { useSendContactMessageMutation } = contactApi;
