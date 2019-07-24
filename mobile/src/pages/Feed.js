import React, { Component } from 'react';

import { View, Image, TouchableOpacity} from 'react-native';

import camera from '../assets/camera.png';

 class Feed extends Component {

    static navigationOptions = {
        headerRight:(
            <TouchableOpacity>
                <Image style={{ marginRight:20 }}source={camera}/>
            </TouchableOpacity>
        )
    }

  render() {
    return <View />;
  }
}
export default Feed;
