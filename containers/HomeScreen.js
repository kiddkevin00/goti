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
  Fab,
  Card,
  CardItem,
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

  state = {
    active: true,
    currentTab: 'ACTIVITIES',
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

          <Fab
            active={this.state.active}
            direction="up"
            position="bottomLeft"
            onPress={() => this.setState({ active: !this.state.active })}
            style={{ backgroundColor: '#ADD8E6' }}
            containerStyle={{ padding: 5 }}
          >
            <Icon
              name="md-globe"
              style={{
                ...Platform.select({ ios: { marginTop: 6 } }),
                lineHeight: 40,
                color: 'white',
                fontSize: 43,
              }}
            />

            <Button style={{ backgroundColor: '#DD5144' }}>
              <Icon name="ios-mail" />
            </Button>
            <Button style={{ backgroundColor: '#DD5144' }}>
              <Icon name="ios-mail" />
            </Button>
            <Button style={{ backgroundColor: '#34A34F' }}>
              <Icon name="ios-share" />
            </Button>
            <Button style={{ backgroundColor: '#3B5998' }}>
              <Icon name="ios-cloud-upload" />
            </Button>
            <Button transparent={true} style={{ backgroundColor: 'transparent' }}>
              <Text style={{ textAlign: 'center', width: 100, color: 'white', fontWeight: '900', fontSize: 11, letterSpacing: -1 }}>STORIES</Text>
            </Button>
            <Button transparent={true} style={{ backgroundColor: 'transparent' }}>
              <Text style={{ textAlign: 'center', width: 100, color: 'white', fontWeight: '900', fontSize: 11, letterSpacing: -1 }} onPress={() => this.setState({ currentTab: 'MESSAGES' })}>MESSAGES</Text>
            </Button>
            <Button transparent={true} style={{ backgroundColor: 'transparent' }}>
              <Text style={{ textAlign: 'center', width: 100, color: 'white', fontWeight: '900', fontSize: 11, letterSpacing: -1 }} onPress={() => this.setState({ currentTab: 'ACTIVITIES' })}>ACTIVITIES</Text>
            </Button>

            <View style={{ justifyContent: 'flex-start' }} disabled={true}>
              <Button style={{ backgroundColor: 'pink' }}>
                <Icon name="close" />
              </Button>

              <Card style={{ display: `${this.state.currentTab === 'ACTIVITIES' ? 'flex' : 'none'}`, marginTop: 200, width: width * 0.6, height: height * 0.7, backgroundColor: 'transparent' }}>
                <CardItem style={{ backgroundColor: 'transparent' }}  header={true} button={true} onPress={() => alert('ACTIVITIES', 'ACTIVITIES 1')}>
                  <Text>ACTIVITIES 1</Text>
                </CardItem>
                <CardItem style={{ backgroundColor: 'transparent' }} header={true} button={true} onPress={() => alert('ACTIVITIES', 'ACTIVITIES 2')}>
                  <Text>ACTIVITIES 2</Text>
                </CardItem>
                <CardItem style={{ backgroundColor: 'transparent' }} header={true} button={true} onPress={() => alert('ACTIVITIES', 'ACTIVITIES 3')}>
                  <Text>ACTIVITIES 3</Text>
                </CardItem>
              </Card>

              <Card style={{ display: `${this.state.currentTab === 'MESSAGES' ? 'flex' : 'none'}`, marginTop: 200, width: width * 0.6, height: height * 0.7, backgroundColor: 'transparent' }}>
                <CardItem style={{ backgroundColor: 'transparent' }} header={true} button={true} onPress={() => alert('MESSAGES', 'MESSAGES 1')}>
                  <Text>MESSAGES 1</Text>
                </CardItem>
                <CardItem style={{ backgroundColor: 'transparent' }} header={true} button={true} onPress={() => alert('MESSAGES', 'MESSAGES 2')}>
                  <Text>MESSAGES 2</Text>
                </CardItem>
                <CardItem style={{ backgroundColor: 'transparent' }} header={true} button={true} onPress={() => alert('MESSAGES', 'MESSAGES 3')}>
                  <Text>MESSAGES 3</Text>
                </CardItem>
              </Card>
            </View>
          </Fab>

          <Footer
            style={{
              backgroundColor: 'transparent',
              borderTopWidth: 0,
              height: footerHeight,
              zIndex: -1,
            }}
          >
            <FooterTab style={{ backgroundColor: 'transparent' }}>
              <Button>
                <Icon name="globe" style={{ display: 'none',  color: 'white', fontSize: 40 }} active={true} />
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
