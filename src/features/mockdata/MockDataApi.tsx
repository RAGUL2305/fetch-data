/** @format */

import {createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export interface GetAllDataResponse {
  id: number;
  name: string;
  gender: 'male' | 'female';
  mobile: string;
  active: boolean;
}

const mockDataAPI = createApi({
  reducerPath: "mockdata",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://66e14386c831c8811b54437e.mockapi.io",
  }),
  endpoints: (builder) => ({
    getAllData: builder.query<GetAllDataResponse[], void>({
      query: () => `/new`,
    }),
    deleteDetail: builder.mutation<void, number>({
      query: (detailId) => ({
        url: `/new/${detailId}`,
        method: "DELETE",
      }),
    }),
  }),
});

export default mockDataAPI;
export const { useGetAllDataQuery, useDeleteDetailMutation } = mockDataAPI;

