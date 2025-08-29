// lib/servicesApi.ts
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export interface Service {
  language: string;
  serviceId: number;
  title: string;
  image: string;
  subtitle: string;
  description: string;
  whyUs: string;
  features: string[];
}

export interface ServiceResponse {
  message: string;
  success: boolean;
}

export interface Service {
  message: string;
  success: boolean;
  services:[]
}

export const servicesApi = createApi({
  reducerPath: 'servicesApi',
  baseQuery: fetchBaseQuery({ baseUrl: '/api' }),
  tagTypes: ['Service'], 
  endpoints: (builder) => ({
    addServices: builder.mutation<ServiceResponse, any>({
      query: (body) => ({
        url: '/service/add',
        method: 'POST',
        body,
      }),
      invalidatesTags: ['Service'], 
    }),

    getServices: builder.query<Service[], { language?: string }>({
      query: ({ language }) => ({
        url: `/services/get-all/${language ? `?language=${language}` : ''}`,
        method: 'GET',
      }),
      providesTags: ['Service'], 
    }),

    getServiceById: builder.query<Service, { serviceId: number }>({
      query: ({ serviceId }) => ({
        url: `/service/${serviceId}`,
        method: 'GET',
      }),
      providesTags: ['Service'],
    }),

    searchServices: builder.query<Service, { q: string; language?: string }>({
      query: ({ q, language }) => ({
        url: `/service/search?q=${encodeURIComponent(q)}${language ? `&language=${language}` : ''}`,
        method: 'GET',
      }),
      providesTags: ['Service'],
    }),
  }),
});

export const {
  useAddServicesMutation,
  useGetServicesQuery,
  useGetServiceByIdQuery,
  useSearchServicesQuery, 
} = servicesApi;
