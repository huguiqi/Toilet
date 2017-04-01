/**
 * Created by samhu on 2017/3/9.
 */
import React, { Component } from 'react';
import {
    Text,
    View,
    StyleSheet
} from 'react-native';

export default class ReaderPage extends Component{

    render(){
        return <View><Text style={styles.text}>阅读器</Text></View>;
    }
}

var styles = StyleSheet.create({
    text: {fontSize: 30}
});