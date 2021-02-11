import React from 'react';
import { Admin, Resource } from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';
import { PostList, PostCreate, PostEdit } from '../../components/admin/Course';

const dataProvider = jsonServerProvider('https://jsonplaceholder.typicode.com');

export default function Dashboard() {
  return (
    <Admin dataProvider={dataProvider}>
      <Resource name="posts" list={PostList} create={PostCreate} edit={PostEdit} />
    </Admin>
  );
}
