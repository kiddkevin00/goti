import dimensions from '../constants/dimensions';
import {
  Container,
  Header,
  Content,
  Left,
  Body,
  Right,
  Button,
  Icon,
  Text,
  Footer,
  FooterTab,
} from 'native-base';
import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
  StatusBar,
  ImageBackground,
} from 'react-native';
import { WebBrowser, Constants } from 'expo';

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  render() {
    const { width, height } = dimensions.window;
    const headerHeight = 65;
    const footerHeight = 55;

    return (
      <ImageBackground style={{ width, height: height - (StatusBar.currentHeight || 0) }} source={require('../assets/images/splash.png')}>
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
            <Image
              source={require('../assets/images/sample-feed.jpg')}
              style={{
                width,
                height: height * 0.8,
                resizeMode: 'cover',
              }}
            />
            <Image
              source={require('../assets/images/sample-feed.jpg')}
              style={{
                width: dimensions.window.width,
                height: dimensions.window.height * 0.8,
                resizeMode: 'cover',
              }}
            />
          </Content>

          <Footer
            style={{
              backgroundColor: 'transparent',
              borderTopWidth: 0,
              height: footerHeight,
            }}
          >
            <FooterTab style={{ backgroundColor: 'transparent' }}>
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
                <Icon name="apps" style={{ color: 'white', fontSize: 24 }} active={true} />
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
