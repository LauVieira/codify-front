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

export const TopicList = (props) => (
  <List {...props}>
    <Datagrid rowClick="edit">
      <TextField source="id" />
      <TextField source="title" />
      <ReferenceField source="chapterId" reference="chapters" label="Capítulo">
        <TextField source="title" />
      </ReferenceField>
      <EditButton basePath="/topics" />
    </Datagrid>
  </List>
);

export const TopicCreate = (props) => (
  <Create {...props}>
    <SimpleForm>
      <TextInput disabled source="id" />
      <TextInput source="title" />
      <ReferenceInput source="chapterId" reference="chapters" label="Capítulo">
        <SelectInput optionText="title" />
      </ReferenceInput>
    </SimpleForm>
  </Create>
);

export const TopicEdit = (props) => (
  <Edit {...props}>
    <SimpleForm>
      <TextInput disabled source="id" />
      <TextInput source="title" />
      <ReferenceInput source="chapterId" reference="chapters" label="Capítulo">
        <SelectInput optionText="title" />
      </ReferenceInput>
    </SimpleForm>
  </Edit>
);
