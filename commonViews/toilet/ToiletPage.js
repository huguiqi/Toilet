/**
 * Created by samhu on 2017/3/9.
 */
import React, { Component } from 'react';
import {
    Text,
    View,
    WebView,
    StyleSheet
} from 'react-native';

import WebViewPage from '../webView/WebViewPage';


const baidu_url = 'https://www.baidu.com';
var amap_url = require('../../html/nearby.html');

export default class ToiletPage extends Component{
    render(){
        return <WebViewPage url={amap_url}/>
    }

}
