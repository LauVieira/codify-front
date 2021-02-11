import React from 'react';
import { Admin, Resource, fetchUtils } from 'react-admin';
import jsonServerProvider from 'ra-data-json-server'; // para api mockada
import simpleRestProvider from 'ra-data-simple-rest'; // para nossa api
import { PostList, PostCreate, PostEdit } from '../../components/admin/Course';
import authProvider from './authProvider';

// const dataProvider = jsonServerProvider('https://jsonplaceholder.typicode.com');

const httpClient = (url, options = {}) => {
  if (!options.headers) {
    options.headers = new Headers({ Accept: 'application/json' });
  }
  options.credentials = 'include';
  return fetchUtils.fetchJson(url, options);
};
const dataProvider = simpleRestProvider('http://localhost:3000/admin', httpClient);

export default function Dashboard() {
  return (
    <Admin authProvider={authProvider} dataProvider={dataProvider}>
      <Resource name="posts" list={PostList} create={PostCreate} edit={PostEdit} />
    </Admin>
  );
}
