import React from 'react';
import FlatButton from 'material-ui/FlatButton';
import { Link } from 'react-router-dom';
import { translate } from 'admin-on-rest';
import { stringify } from 'query-string';
import UserIcon from 'material-ui/svg-icons/social/person';

const LinkToRelatedUsers = ({ segment, translate }) => (
    <FlatButton
        primary
        label={translate('resources.segments.fields.users')}
        icon={<UserIcon />}
        containerElement={<Link to={{
            pathname: "/users",
            search: stringify({ page: 1, perPage: 25, filter: JSON.stringify({ countries: segment }) }),
        }} />}
    />
);

export default translate(LinkToRelatedUsers);
