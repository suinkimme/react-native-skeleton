import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// utils
import { baseURL, API } from 'utils';

export const tempApi = createApi({
  reducerPath: 'tempApi',
  baseQuery: fetchBaseQuery({
    baseUrl: baseURL,
  }),
  endpoints: builder => ({
    temp: builder.mutation({
      query: credentials => ({
        url: API.temp,
        method: 'POST',
        body: credentials,
      }),
    }),
  }),
});

export const { useTempMutation } = tempApi;
