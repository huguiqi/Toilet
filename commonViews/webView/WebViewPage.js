/**
 * Created by samhu on 2017/3/9.
 */

import React, {Component} from 'react';
import {WebView, StyleSheet,View,Text} from 'react-native';

export default class WebViewPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isError: false,
            source: {uri: this.props.url}
        };
    }

    render() {
        if (this.state.isError) {
            return <View style={styles.textView}><Text style={styles.text}>网络请求错误,请核查后再试</Text></View>;
        }
        return <View style={styles.contain}>{this.renderWebView()}</View>;
    }

    showError() {
        this.setState({
            isError: true
        });
    }

     renderWebView = ()=> {
         console.log('url is :'+ this.props.url);
         if ((typeof this.props.url === 'string') && (this.props.url.startsWith('http://')|| this.props.url.startsWith('https://'))){
             return (<WebView
                 source={this.state.source}
                 startInLoadingState={true}
                 onError={this.showError.bind(this)}
                 style={styles.webContent}
             />);
         }

         return (<WebView
             source={this.props.url}
             javaScriptEnabled={true}
             scalesPageToFit={true}
             domStorageEnabled={true}
             decelerationRate="normal"
             startInLoadingState={true}
             onError={this.showError.bind(this)}
             style={styles.webContent}
         />);
    }
}


var styles = StyleSheet.create({
    text: {
        fontSize: 20,
        fontWeight:'100'
    },
    textView:{
        justifyContent: 'center',
        alignItems:'center'
    },
    contain:{
        flex:1
    },
    webContent:{
        marginTop:-20
    }

});
