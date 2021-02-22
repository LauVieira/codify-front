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

export const ActivityList = (props) => (
  <List {...props}>
    <Datagrid rowClick="edit">
      <TextField source="id" />
      <ReferenceField source="topicId" reference="topics" label="Tópico">
        <TextField source="title" />
      </ReferenceField>
      <TextField source="type" />
      <EditButton basePath="/Activities" />
    </Datagrid>
  </List>
);

export const ActivityCreate = (props) => (
  <Create {...props}>
    <SimpleForm>
      <TextInput disabled source="id" />
      <ReferenceInput source="topicId" reference="topics" label="Tópico">
        <SelectInput optionText="title" />
      </ReferenceInput>
      <TextField source="type" />
    </SimpleForm>
  </Create>
);

export const ActivityEdit = (props) => (
  <Edit {...props}>
    <SimpleForm>
      <TextInput disabled source="id" />
      <ReferenceInput source="topicId" reference="topics" label="Tópico">
        <SelectInput optionText="title" />
      </ReferenceInput>
      <TextField source="type" />
    </SimpleForm>
  </Edit>
);
