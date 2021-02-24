import React, { useState } from 'react';
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

export const TheoryList = (props) => (
  <List {...props}>
    <Datagrid rowClick="edit">
      <TextField source="id" />
      <ReferenceField source="courseId" reference="courses" label="Curso">
        <TextField source="title" />
      </ReferenceField>
      <ReferenceField source="chapterId" reference="chapters" label="Capítulo">
        <TextField source="title" />
      </ReferenceField>
      <ReferenceField source="topicId" reference="topics" label="Tópico">
        <TextField source="title" />
      </ReferenceField>
      <TextField source="youtubeLink" />
      <EditButton basePath="/Theories" />
      <DeleteButton basePath="/Theories" />
    </Datagrid>
  </List>
);

export function TheoryCreate(props) {
  const [courseId, setCourseId] = useState(null);
  const [chapterId, setChapterId] = useState(null);
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput disabled source="id" />
        <ReferenceInput source="courseId" reference="courses" label="Curso" onChange={(e) => setCourseId(e.target.value)}>
          <SelectInput optionText="title" />
        </ReferenceInput>
        <ReferenceInput filter={{ courseId }} source="chapterId" reference="chapters" label="Capítulo" onChange={(e) => setChapterId(e.target.value)}>
          <SelectInput optionText="title" />
        </ReferenceInput>
        <ReferenceInput filter={{ chapterId }} source="topicId" reference="topics" label="Tópico">
          <SelectInput optionText="title" />
        </ReferenceInput>
        <TextInput source="youtubeLink" />
        <DeleteButton basePath="/Theories" />
      </SimpleForm>
    </Create>
  );
}

export function TheoryEdit(props) {
  const [courseId, setCourseId] = useState(null);
  const [chapterId, setChapterId] = useState(null);
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput disabled source="id" />
        <ReferenceInput source="courseId" reference="courses" label="Curso" onChange={(e) => setCourseId(e.target.value)}>
          <SelectInput optionText="title" />
        </ReferenceInput>
        <ReferenceInput filter={{ courseId }} source="chapterId" reference="chapters" label="Capítulo" onChange={(e) => setChapterId(e.target.value)}>
          <SelectInput optionText="title" />
        </ReferenceInput>
        <ReferenceInput filter={{ chapterId }} source="topicId" reference="topics" label="Tópico">
          <SelectInput optionText="title" />
        </ReferenceInput>
        <TextInput source="youtubeLink" />
        <DeleteButton basePath="/Theories" />
      </SimpleForm>
    </Edit>
  );
}
