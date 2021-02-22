import React from 'react';
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

export const ActivityList = (props) => (
  <List {...props}>
    <Datagrid rowClick="edit">
      <TextField source="id" />
      <TextField source="title" />
      <ReferenceField source="topicId" reference="topics" label="Tópico">
        <TextField source="title" />
      </ReferenceField>
      <EditButton basePath="/Activities" />
    </Datagrid>
  </List>
);

export const ActivityCreate = (props) => (
  <Create {...props}>
    <SimpleForm>
      <TextInput disabled source="id" />
      <TextInput source="title" />
      <ReferenceInput source="topicId" reference="topics" label="Tópico">
        <SelectInput optionText="title" />
      </ReferenceInput>
    </SimpleForm>
  </Create>
);

export const ActivityEdit = (props) => (
  <Edit {...props}>
    <SimpleForm>
      <TextInput disabled source="id" />
      <TextInput source="title" />
      <ReferenceInput source="topicId" reference="topics" label="Tópico">
        <SelectInput optionText="title" />
      </ReferenceInput>
    </SimpleForm>
  </Edit>
);
