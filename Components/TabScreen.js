import React, { Component } from 'react';
import { Container, Header, Body, Title, Content, Tab, Tabs } from 'native-base';
import Tab1 from './tabOne';
import Tab2 from './tabTwo';
import Tab3 from './tabThree';

function TabScreen () {
  return (
    <Container>
      <Header hasTabs>
        <Body>
          <Title>News</Title>
        </Body>
      </Header>
      <Tabs>
        <Tab heading="일반">
          <Tab1 />
        </Tab>
        <Tab heading="건강">
          <Tab2 />
        </Tab>
        <Tab heading="연예">
          <Tab3 />
        </Tab>
      </Tabs>
    </Container>
  );
}

export default TabScreen;