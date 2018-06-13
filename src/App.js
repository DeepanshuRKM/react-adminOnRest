import React, { Component } from 'react';
import { Admin, Resource, jsonServerRestClient } from 'admin-on-rest';
import Layout from './Layout';
import Menu from './Menu';
import './App.css';
import { Dashboard } from './dashboard';
import { UserList } from './users';
import drawerModal from './drawer.js';

class App extends Component {
  render() {
    return (
      <Admin
        title="Admin On Rest"
        restClient={jsonServerRestClient('http://localhost:3001')}
        dashboard={Dashboard}
        appLayout={Layout}
        menu={Menu}
      >
        <Resource name="users" list={UserList} />
      </Admin>
    );
  }
}

export default App;