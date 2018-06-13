import React from 'react';
import pure from 'recompose/pure';

const FullNameField = ({ record = {}, size = 25 }) => <span>
    <span style={{ display: 'inline-block', width: size/3 }}>&nbsp;</span>
    {record.name} {record.username}
</span>;


const PureFullNameField = pure(FullNameField);

PureFullNameField.defaultProps = {
    source: 'username',
    label: 'resources.customers.fields.name',
};

export default PureFullNameField;
