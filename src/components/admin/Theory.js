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

export const TheoryList = (props) => (
  <List {...props}>
    <Datagrid rowClick="edit">
      <TextField source="id" />
      <ReferenceField source="activityId" reference="activities" label="Atividade">
        <TextField source="type" />
      </ReferenceField>
      <TextField source="youtubeLink" />
      <EditButton basePath="/Theories" />
      <DeleteButton basePath="/Theories" />
    </Datagrid>
  </List>
);

export const TheoryCreate = (props) => (
  <Create {...props}>
    <SimpleForm>
      <TextInput disabled source="id" />
      <ReferenceInput source="activityId" reference="activities" label="Atividade">
        <SelectInput optionText="type" />
      </ReferenceInput>
      <TextInput source="youtubeLink" />
      <DeleteButton basePath="/Theories" />
    </SimpleForm>
  </Create>
);

export const TheoryEdit = (props) => (
  <Edit {...props}>
    <SimpleForm>
      <TextInput disabled source="id" />
      <ReferenceInput source="activityId" reference="activities" label="Atividade">
        <SelectInput optionText="type" />
      </ReferenceInput>
      <TextInput source="youtubeLink" />
      <DeleteButton basePath="/Theories" />
    </SimpleForm>
  </Edit>
);
