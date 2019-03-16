import dimensions from '../constants/dimensions';
import { Container, Header, Content, Left, Body, Right, Button, Icon, Text } from 'native-base';
import React from 'react';
import { Image, ScrollView, StyleSheet, StatusBar } from 'react-native';
import { ExpoLinksView } from '@expo/samples';

export default class LinksScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  render() {
    return (
      <Container style={{ backgroundColor: '#000' }}>
        <Header
          style={{
            backgroundColor: 'rgba(0, 0, 0, 0)',
            height: 65,
            borderBottomWidth: 0,
          }}
        >
          <StatusBar barStyle="light-content" />
          <Left style={{ flexGrow: 1 }}>
            <Button transparent={true} onPress={() => {}}>
              <Icon name="md-person" style={{ color: 'white', fontSize: 27 }} />
            </Button>
          </Left>
          <Body style={{ flexGrow: 4, alignItems: 'center' }}>
            <Image source={require('../assets/images/header-title.png')} />
          </Body>
          <Right style={{ flexGrow: 1 }}>
            <Button transparent={true} onPress={() => {}}>
              <Icon name="ios-camera" style={{ color: 'white', fontSize: 27 }} />
            </Button>
          </Right>
        </Header>

        <Content />
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
});
