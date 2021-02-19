import React from 'react';
import {
  List,
  Create,
  Edit,
  Datagrid,
  TextField,
  EditButton,
  DeleteButton,
  SimpleForm,
  TextInput,
  ReferenceField,
  ReferenceInput,
  SelectInput,
} from 'react-admin';

export const ChapterList = (props) => (
  <List {...props}>
    <Datagrid rowClick="edit">
      <TextField source="id" />
      <TextField source="title" />
      <ReferenceField source="courseId" reference="courses" label="Curso">
        <TextField source="title" />
      </ReferenceField>
      <EditButton basePath="/chapters" />
      <DeleteButton basePath="/chapters" />
    </Datagrid>
  </List>
);

export const ChapterCreate = (props) => (
  <Create {...props}>
    <SimpleForm>
      <TextInput disabled source="id" />
      <TextInput source="title" />
      <ReferenceInput source="courseId" reference="courses" label="Curso">
        <SelectInput optionText="title" />
      </ReferenceInput>
      <DeleteButton basePath="/chapters" />
    </SimpleForm>
  </Create>
);

export const ChapterEdit = (props) => (
  <Edit {...props}>
    <SimpleForm>
      <TextInput disabled source="id" />
      <TextInput source="title" />
      <ReferenceInput source="courseId" reference="courses" label="Curso">
        <SelectInput optionText="title" />
      </ReferenceInput>
      <DeleteButton basePath="/chapters" />
    </SimpleForm>
  </Edit>
);
