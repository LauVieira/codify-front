import React, { useState } from 'react';
import {
  List,
  Create,
  Edit,
  Datagrid,
  TextField,
  EditButton,
  SimpleForm,
  TextInput,
  ReferenceField,
  ReferenceInput,
  SelectInput,
} from 'react-admin';

export const TopicList = (props) => (
  <List {...props}>
    <Datagrid rowClick="edit">
      <TextField source="id" />
      <TextField source="title" />
      <ReferenceField source="courseId" reference="courses" label="Curso">
        <TextField source="title" />
      </ReferenceField>
      <ReferenceField source="chapterId" reference="chapters" label="Capítulo">
        <TextField source="title" />
      </ReferenceField>
      <EditButton basePath="/topics" />
    </Datagrid>
  </List>
);

export function TopicCreate(props) {
  const [courseId, setCourseId] = useState(null);
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput disabled source="id" />
        <ReferenceInput source="courseId" reference="courses" label="Curso" onChange={(e) => setCourseId(e.target.value)}>
          <SelectInput optionText="title" />
        </ReferenceInput>
        <ReferenceInput filter={{ courseId }} source="chapterId" reference="chapters" label="Capítulo">
          <SelectInput optionText="title" />
        </ReferenceInput>
        <TextInput source="title" label="Tópico" />
      </SimpleForm>
    </Create>
  );
}

export function TopicEdit(props) {
  const [courseId, setCourseId] = useState(null);
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput disabled source="id" />
        <ReferenceInput source="courseId" reference="courses" label="Curso" onChange={(e) => setCourseId(e.target.value)}>
          <SelectInput optionText="title" />
        </ReferenceInput>
        <ReferenceInput filter={{ courseId }} source="chapterId" reference="chapters" label="Capítulo">
          <SelectInput optionText="title" />
        </ReferenceInput>
        <TextInput source="title" label="Tópico" />
      </SimpleForm>
    </Edit>
  );
}
