import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import {
  Admin, Resource, fetchUtils, Title,
} from 'react-admin';
import simpleRestProvider from 'ra-data-simple-rest';
import { CourseList, CourseCreate, CourseEdit } from '../../components/admin/Course';
import { ChapterList, ChapterCreate, ChapterEdit } from '../../components/admin/Chapter';
import { TopicList, TopicCreate, TopicEdit } from '../../components/admin/Topic';
import { TheoryList, TheoryCreate, TheoryEdit } from '../../components/admin/Theory';
import authProvider from './authProvider';

const httpClient = (url, options = {}) => {
  if (!options.headers) {
    options.headers = new Headers({ Accept: 'application/json' });
  }
  options.credentials = 'include';
  return fetchUtils.fetchJson(url, options);
};
const dataProvider = simpleRestProvider(`${process.env.API_BASE_URL}/admin`, httpClient);

export default function Dashboard() {
  return (
    <Admin authProvider={authProvider} dataProvider={dataProvider}>
      <Resource name="courses" list={CourseList} create={CourseCreate} edit={CourseEdit} />
      <Resource name="chapters" list={ChapterList} create={ChapterCreate} edit={ChapterEdit} />
      <Resource name="topics" list={TopicList} create={TopicCreate} edit={TopicEdit} />
      <Resource name="theories" list={TheoryList} create={TheoryCreate} edit={TheoryEdit} />
    </Admin>
  );
}
