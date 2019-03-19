import dimensions from '../constants/dimensions';
import { Container, Header, Content, Left, Body, Right, Button, Icon, Text, Footer, FooterTab } from 'native-base';
import React from 'react';
import { Image, ScrollView, StyleSheet, ImageBackground } from 'react-native';

export default class LinksScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  render() {
    const { width, height } = dimensions.window;
    const headerHeight = 65;
    const footerHeight = 55;

    return (
      <ImageBackground style={{ width, height }} source={require('../assets/images/splash.png')}>
        <Container style={{ backgroundColor: 'transparent' }}>
          <Header
            iosBarStyle="light-content"
            style={{
              backgroundColor: 'rgba(0, 0, 0, 0)',
              borderBottomWidth: 0,
              height: headerHeight,
            }}
            noShadow={true}
          >
            <Left style={{ flexGrow: 1 }}>
              <Button transparent={true} onPress={() => {}}>
                <Icon name="person" style={{ color: 'white', fontSize: 32 }} active={true} />
              </Button>
            </Left>
            <Body style={{ flexGrow: 4, alignItems: 'center' }}>
            <Image source={require('../assets/images/header-title.png')} />
            </Body>
            <Right style={{ flexGrow: 1 }}>
              <Button transparent={true} onPress={() => {}}>
                <Icon name="md-camera" style={{ color: 'white', fontSize: 24 }} active={true} />
              </Button>
            </Right>
          </Header>

          <Content style={{ zIndex: -1, top: -1 * headerHeight, marginBottom: -1 * (headerHeight + footerHeight)}}>
          </Content>

          <Footer
            style={{
              backgroundColor: 'rgba(0, 0, 0, 0)',
              borderTopWidth: 0,
              height: footerHeight,
            }}
          >
            <FooterTab>
              <Button>
                <Icon name="globe" style={{ color: 'white', fontSize: 40 }} active={true} />
              </Button>
              <Button>
                <Icon name="home" style={{ color: 'white', fontSize: 24 }} active={true} />
              </Button>
              <Button>
                <Icon name="search" style={{ color: 'white', fontSize: 24 }} active={true} />
              </Button>
              <Button>
                <Icon name="apps" style={{ marginLeft: 10, color: 'white', fontSize: 24 }} active={true} />
              </Button>
              <Button>
                <Icon name="list-box" style={{ color: 'white', fontSize: 24 }} active={true} />
              </Button>
            </FooterTab>
          </Footer>
        </Container>
      </ImageBackground>
    );
  }
}
