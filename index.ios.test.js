/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

// import React, { Component } from 'react';
// import {
//   AppRegistry,
//   StyleSheet,
//   Text,
//   View
// } from 'react-native';
//
// export default class AwesomeProject extends Component {
//   render() {
//     return (
//       <View style={styles.container}>
//         <Text style={styles.welcome}>
//          你好,React
//         </Text>
//       </View>
//     );
//   }
// }
//
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#F5FCFF',
//   },
//   welcome: {
//     fontSize: 20,
//     textAlign: 'center',
//     margin: 10,
//   }
// });
//
// AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);



// import React, { Component } from 'react';
// import { AppRegistry, Image,StyleSheet } from 'react-native';
//
// class Bananas extends Component {
//   render() {
//     let pic = {
//       uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
//     };
//     return (
//         <Image source={pic} style={styles.imgSty}/>
//   );
//   }
// }
//
// const styles = StyleSheet.create({
//   imgSty:{width: 193, height: 110,position:'relative',left:'20%',top:'30%'}
// });
//
// AppRegistry.registerComponent('AwesomeProject', () => Bananas);


// import React, { Component } from 'react';
// import {AppRegistry, Text,TextInput, View,Alert} from 'react-native'
//
// class AppInput extends Component{
//   constructor(props) {
//     super(props);
//     this.state = {text: '',style:{position:'relative',left:'10%',top:'30%',width:'50%'}};
//   }
//   render(){
//     return (<View style={this.state.style}>
//       <TextInput style={{height: 40, borderColor: 'gray', borderWidth: 1}} placeholder="请输入手机号码"
//                  onChangeText={(text) =>
//                  this.setState({text})}
//                  value={this.state.text}>
//     </TextInput><Text>{this.state.text}</Text></View>);
//   }
// }
//
//
//
//
// AppRegistry.registerComponent('AwesomeProject', () => AppInput);





import React, { Component } from 'react';
import {AppRegistry, Text,TextInput, View} from 'react-native'


class AppInput extends Component {
  constructor(props) {
    super(props);
    this.state = {style: {position: 'relative', left: '10%', top: '30%', width: '50%'}};
  }

  render() {
    return (<View style={this.state.style}>
        <Text>{this.props.name}</Text>
     <TextInput style={{height: 40, borderColor: 'gray', borderWidth: 1}} placeholder={this.props.place}>
      </TextInput></View>);
  }
}

class LoginView extends Component{

render(){
  return <View>
          <AppInput name="手机号" place="请输入手机号"/>
          <AppInput name="密码" place="请输入密码"/>
          </View>
}
}




AppRegistry.registerComponent('AwesomeProject', () => LoginView);