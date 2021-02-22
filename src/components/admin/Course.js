import React from 'react';
import {
  List,
  Create,
  Edit,
  Datagrid,
  TextField,
  DateField,
  EditButton,
  SimpleForm,
  TextInput,
  DateInput,
} from 'react-admin';

export const CourseList = (props) => (
  <List {...props}>
    <Datagrid rowClick="edit">
      <TextField source="id" />
      <TextField source="title" />
      <TextField source="description" />
      <TextField source="photo" />
      <TextField source="alt" />
      <TextField source="background" />
      <DateField source="createdAt" />
      <DateField source="updatedAt" />
      <EditButton basePath="/courses" />
    </Datagrid>
  </List>
);

export const CourseCreate = (props) => (
  <Create {...props}>
    <SimpleForm>
      <TextInput disabled source="id" />
      <TextInput source="title" />
      <TextInput source="description" />
      <TextInput source="photo" />
      <TextInput source="alt" />
      <TextInput source="background" />
      <DateInput source="createdAt" />
      <DateInput source="updatedAt" />
    </SimpleForm>
  </Create>
);

export const CourseEdit = (props) => (
  <Edit {...props}>
    <SimpleForm>
      <TextInput disabled source="id" />
      <TextInput source="title" />
      <TextInput source="description" />
      <TextInput source="photo" />
      <TextInput source="alt" />
      <TextInput source="background" />
      <DateInput disabled source="createdAt" />
      <DateInput source="updatedAt" />
    </SimpleForm>
  </Edit>
);
