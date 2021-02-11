import React from 'react';
import {
  List,
  Create,
  Edit,
  Datagrid,
  TextField,
  DateField,
  EditButton,
  DeleteButton,
  SimpleForm,
  TextInput,
  DateInput,
} from 'react-admin';

export const PostList = (props) => (
  <List {...props}>
    <Datagrid>
      <TextField source="id" />
      <TextField source="title" />
      <TextField source="body" />
      <EditButton />
      <DeleteButton />
    </Datagrid>
  </List>
);

export const PostCreate = (props) => (
  <Create {...props}>
    <SimpleForm>
      <TextInput source="title" />
      <TextInput source="body" />
    </SimpleForm>
  </Create>
);

export const PostEdit = (props) => (
  <Edit {...props}>
    <SimpleForm>
      <TextInput disabled source="id" />
      <TextInput source="title" />
      <TextInput source="body" />
    </SimpleForm>
  </Edit>
);

// export const CourseList = (props) => (
//   <List {...props}>
//     <Datagrid>
//       <TextField source="id" />
//       <TextField source="title" />
//       <TextField source="description" />
//       <TextField source="photo" />
//       <TextField source="alt" />
//       <TextField source="background" />
//       <DateField source="createdAt" />
//       <DateField source="updatedAt" />
//       <EditButton basePath="/courses" />
//       <DeleteButton basePath="courses" />
//     </Datagrid>
//   </List>
// );

// export const CourseCreate = (props) => (
//   <Create {...props}>
//     <SimpleForm>
//       <TextInput disabled source="id" />
//       <TextInput source="title" />
//       <TextInput source="description" />
//       <TextInput source="photo" />
//       <TextInput source="alt" />
//       <TextInput source="background" />
//       <DateInput source="createdAt" />
//       <DateInput source="updatedAt" />
//       <DeleteButton basePath="courses" />
//     </SimpleForm>
//   </Create>
// );
