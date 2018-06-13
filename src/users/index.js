import React from 'react';
import { translate,List,Delete, Datagrid, EmailField, TextField } from 'admin-on-rest';
import SegmentsField from './SegmentsField';
import EditButton from '../buttons/EditButton';

export const UserList = (props) => (
    <List title="All users" {...props}>
        <Datagrid>
            <TextField source="id" />
            <TextField source="name" />
            <TextField source="username" />
            <EmailField source="email" />
            <SegmentsField />
            <EditButton />
        </Datagrid>
    </List>
);

const UserDeleteTitle = translate(({ record, translate }) => <span>
    {translate('resources.users.page.delete')}&nbsp;
    {record && `${record.name} ${record.username}`}
</span>);

export const UserDelete = (props) => <Delete {...props} title={<UserDeleteTitle />} />