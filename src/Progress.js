import React from 'react';
import { View, Animated, Linking, StyleSheet, Text, Image, ScrollView, TouchableOpacity, Alert, List } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { updateProducts } from './state/actions';

import { withNavigation } from 'react-navigation';
import { Button } from 'react-native-paper';

import { FAB } from 'react-native-paper';
import * as Progress from 'react-native-progress';

class ProgressScreen extends React.Component {
    constructor(props) {
        super(props);
    }

    state = {
     bar:0.3
    };
componentDidMount=()=>{
    setTimeout(()=>{
        this.setState({bar:0.6})
    },1000)
    setTimeout(()=>{
        this.setState({bar:0.8})
    },1000)
    
    setTimeout(()=>{
        this.setState({bar:1})
        this.props.navigation.navigate('Results')
    },3000)
}

    render() {




        return (
            <View style={{ flex: 1 }}>
                <ScrollView>
                    <Image source={require('./assets/blood-drop.png')} style={styles.image} />
                    <View style={styles.res}>
                        <Text style={styles.text}>Measuring</Text>
                    </View>
                    <Progress.Bar height={10} color='#cc1100' progress={this.state.bar} width={200} style={{alignSelf:'center', marginTop:'20%'}} />

                    
                </ScrollView>
            </View>



        );
    }
}

const styles = StyleSheet.create({
    fab: {
        position: 'absolute',
        margin: 16,
        right: 0,
        bottom: '0%',
    },
    image:
    {
        height: 100,
        width: 100,
        alignSelf: 'center',
        marginTop: '50%'
    },
    image1:
    {
        height: 10,
        width: 10,
    },
    res:
    {
        height: 30,
        width: '90%',
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20,
        borderTopWidth: 1,
        borderColor: 'grey',
        borderBottomWidth: 1
    },
    text:
    {
        fontSize:15,
        fontWeight:'bold',
        color:'red'
    },
    text1:
    {
        fontSize:17,
        fontWeight:'bold',
        color:'black',
        marginTop:20,
        marginLeft:15
    },
    text2:
    {
        fontSize:14,
        fontWeight:'bold',
        color:'black',
        marginLeft:15
    },
    text3:
    {
        fontSize:14,
        marginLeft:40,
        marginTop:5
    },
    detail:
    {
        flexDirection:'row',
        alignItems:'center',
        marginLeft:15,
        marginTop:15
    }

})

const mapStateToProps = (state) => {
    const { products } = state
    return { products }
};

const mapDispatchToProps = dispatch => (
    bindActionCreators({
        updateProducts
    }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(withNavigation(ProgressScreen));