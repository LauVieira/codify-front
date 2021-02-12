import React from 'react';
import { Admin, Resource, fetchUtils } from 'react-admin';
import simpleRestProvider from 'ra-data-simple-rest';
import { CourseList, CourseCreate, CourseEdit } from '../../components/admin/Course';
import { ChapterList, ChapterCreate, ChapterEdit } from '../../components/admin/Chapter';
import { TopicList, TopicCreate, TopicEdit } from '../../components/admin/Topic';
import authProvider from './authProvider';

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
      <Resource name="courses" list={CourseList} create={CourseCreate} edit={CourseEdit} />
      <Resource name="chapters" list={ChapterList} create={ChapterCreate} edit={ChapterEdit} />
      <Resource name="topics" list={TopicList} create={TopicCreate} edit={TopicEdit} />
    </Admin>
  );
}
