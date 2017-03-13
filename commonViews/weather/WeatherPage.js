/**
 * Created by samhu on 2017/3/9.
 */
import React, { Component } from 'react';
import {
    Text,
    View,
    StyleSheet
} from 'react-native';

export default class WeatherPage extends Component{

    render(){
        return <View><Text style={styles.text}>天气</Text></View>;
    }
}

var styles = StyleSheet.create({
    text: {fontSize: 30}
});