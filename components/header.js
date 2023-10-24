import React from 'react';
import { View, TouchableOpacity, Image } from 'react-native';
import { Header, Left, Right, Button, Icon } from 'native-base';

const CustomHeader = (props) => {
  return (
    <Header style={styles.header}>
      <Left>
        <Button transparent onPress={() => props.drawer.current.openDrawer()}>
          <Image source={require('../assets/menu.png')} style={styles.icon} />
        </Button>
      </Left>
      <Right>
        <View style={styles.iconsView}>
          <Image source={require('../assets/facebook.png')} style={styles.icons} />
          <Image source={require('../assets/youtube.png')} style={styles.icons} />
          <Image source={require('../assets/twitter.png')} style={styles.icons} />
          <Image source={require('../assets/search.png')} style={styles.icons} />
        </View>
      </Right>
    </Header>
  );
};

const styles = {
  header: {
    backgroundColor: '#AA0002',
    padding: 15,
  },
  iconsView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  icons: {
    width: 36,
    height: 16,
    resizeMode: 'contain',
  },
  icon: {
    width: 18,
    height: 18,
    resizeMode: 'contain',
  },
};

export default CustomHeader;
