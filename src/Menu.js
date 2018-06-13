import React from 'react';
import { connect } from 'react-redux';
import compose from 'recompose/compose';
import { translate,DashboardMenuItem, MenuItemLink } from 'admin-on-rest';
import UserIcon from 'material-ui/svg-icons/social/person';
import Button from '@material-ui/core/Button';

const items = [
    { name: 'users', icon: <UserIcon /> }
];

const styles = {
    main: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        height: '100%',
    },
};

const Menu = ({ onMenuTap, translate, toggle_drawer }) => (
    <div style={styles.main}>
        <DashboardMenuItem onClick={onMenuTap} />
        {items.map(item => (
            <MenuItemLink
                key={item.name}
                to={`/${item.name}`}
                primaryText='Users'
                leftIcon={item.icon}
                onClick={onMenuTap}
            />
        ))}
        <Button onClick={toggle_drawer}>Open</Button>
    </div>
);

const enhance = compose(
    connect(state => ({
        theme: state.theme,
        locale: state.locale,
    })),
    translate,
);

export default enhance(Menu);