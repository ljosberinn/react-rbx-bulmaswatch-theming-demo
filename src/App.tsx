import React from 'react';
import { DEFAULTS } from 'rbx/base/helpers/variables';
import { Column } from 'rbx';
import {
  Sidebar,
  Typography,
  Box,
  Button,
  Content,
  Delete,
  Form,
  Icon,
  Images,
  Notifications,
  Progress,
  Table,
  Tag,
  Breadcrumb,
  Hero,
  Card,
  Dropdown,
  Level,
  Header,
  Media,
  Menu,
  Message,
  Modal,
  Navbar,
  Pagination,
  Panel,
  Tabs,
} from './components';

const App: React.FC = () => {
  return (
    <>
      <Header />
      <Column.Group>
        <Column size={2}>
          <Sidebar />
        </Column>
        <Column>
          <Typography />
          <Box />
          <Button />
          <Content />
          <Delete />
          <Form />
          <Icon />
          <Images />
          <Notifications />
          <Progress />
          <Table />
          <Tag />
          <Breadcrumb />
          <Hero />
          <Card />
          <Dropdown />
          <Level />
          <Media />
          <Menu />
          <Message />
          <Modal />
          <Navbar />
          <Pagination />
          <Panel />
          <Tabs />
        </Column>
      </Column.Group>
    </>
  );
};

export default App;
