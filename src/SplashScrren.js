import React from 'react';
import { View, Animated, Linking, StyleSheet, Text, Image, ScrollView, TouchableOpacity, Alert, List } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { updateProducts } from './state/actions';

import { withNavigation } from 'react-navigation';
import { Button } from 'react-native-paper';

import { FAB } from 'react-native-paper';
import * as Progress from 'react-native-progress';
import LinearGradient from 'react-native-linear-gradient';

class SplashScreen extends React.Component {
    constructor(props) {
        super(props);
    }

    state = {
    };
    componentDidMount = () => {

        setTimeout(() => {
            this.props.navigation.navigate('Home')
        }, 3000)
    }

    render() {




        return (
            <View style={{ flex: 1 }}>
                <LinearGradient colors={['#cc1100', '#9e1205', '#700b01','#470801','#2e0602','#120200','#170301',]} style={{flex:1, alignItems:'center',justifyContent:'center'}}>
               <Image source={require('./assets/heart-beat.png')} style={styles.image} />
                </LinearGradient>
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
        fontSize: 15,
        fontWeight: 'bold',
        color: 'red'
    },
    text1:
    {
        fontSize: 17,
        fontWeight: 'bold',
        color: 'black',
        marginTop: 20,
        marginLeft: 15
    },
    text2:
    {
        fontSize: 14,
        fontWeight: 'bold',
        color: 'black',
        marginLeft: 15
    },
    text3:
    {
        fontSize: 14,
        marginLeft: 40,
        marginTop: 5
    },
    detail:
    {
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 15,
        marginTop: 15
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

export default connect(mapStateToProps, mapDispatchToProps)(withNavigation(SplashScreen));