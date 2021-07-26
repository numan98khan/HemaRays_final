import * as React from 'react';

import { TextInput } from 'react-native-paper';
import { Button } from 'react-native-paper';
import { View, Animated, Linking, StyleSheet, Text, Image, ScrollView, TouchableOpacity, Alert, List } from 'react-native';


import { withNavigation} from 'react-navigation';

import Fire from './Fire';
import GDrive from "react-native-google-drive-api-wrapper";

class MyComponent extends React.Component {
  constructor(props) {
    super(props);
  
    this.state = {
      firstName: 'fname',
      lastName: 'lname',
      patientID: 'P01',
      age: '26'
    };
  }

  componentDidMount() {
    // // Create a root reference
    // var storageRef = Fire.getFire().storage().ref();

    // // Create a reference to 'mountains.jpg'
    // var mountainsRef = storageRef.child('mountains.jpg');

    // // Create a reference to 'images/mountains.jpg'
    // var mountainImagesRef = storageRef.child('images/mountains.jpg');

    // // While the file names are the same, the references point to different files
    // mountainsRef.name === mountainImagesRef.name            // true
    // mountainsRef.fullPath === mountainImagesRef.fullPath    // false
  }
  
  moveOn = () => {
    var our_data = Fire.getFire().database()
      .ref("records")
      .push({
        firstName: this.state.firstName,
        lastName: this.state.lastName,
        patientID: this.state.patientID,
        age: this.state.age,
        isCleared: false,
      }).getKey()
      // .then((snap) => {
      //   console.log(snap.key);
      //   // our_data = snap.key 
      // })
      // .set(
      //   )

    // var newID = our_data.name();

    // console.log(our_data);

    this.props.navigation.navigate('Camera', {
        id: our_data
    })
  
  }

  // const [text, setText] = React.useState('');
  render() {
    const text = "heya";

    return (
      <View style={{padding: '5%'}}>
        <TextInput
          label="First Name"
          value={this.state.firstName}
          onChangeText={firstName => this.setState({firstName: firstName})}
        />

        <TextInput
          label="Last Name"
          value={this.state.lastName}
          onChangeText={lastName => this.setState({lastName: lastName})}
        />

        <TextInput
          label="Last Name"
          value={this.state.age}
          onChangeText={age => this.setState({age: age})}
        />

        <TextInput
          label="Patient ID"
          value={this.state.patientID}
          onChangeText={patientID => this.setState({patientID: patientID})}
        />

        <Button icon="camera" mode="contained" onPress={() => this.moveOn()}>
          Go to Camera
        </Button>
    </View>
    );
  }
};

export default withNavigation(MyComponent);