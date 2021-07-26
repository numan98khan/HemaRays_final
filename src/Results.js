import React from 'react';
import { View, Animated, Linking, StyleSheet, Text, Image, ScrollView, TouchableOpacity, Alert, List } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { updateProducts } from './state/actions';

import { withNavigation } from 'react-navigation';
import { Button } from 'react-native-paper';

import { FAB } from 'react-native-paper';

class Results extends React.Component {
    constructor(props) {
        super(props);
    }

    state = {
        search: '',
        _swipeableRow: null,
        currentAdIndex: 0,
    };


    render() {




        return (
            <View style={{ flex: 1 }}>
                <ScrollView>
                    <Image source={require('./assets/blood-drop.png')} style={styles.image} />
                    <View style={styles.res}>
                        <Text style={styles.text}>14.72g/dL</Text>
                    </View>
                    <Text style={styles.text1}>Daignosis:</Text>
                    <View style={styles.detail}>
                    <Image source={require('./assets/black-circle.png')} style={styles.image1} />
                    <Text style={styles.text2}>Anemic?</Text>
                    </View>
                    <Text style={styles.text3}>No signs</Text>
                    <View style={styles.detail}>
                    <Image source={require('./assets/black-circle.png')} style={styles.image1} />
                    <Text style={styles.text2}>Acceptable for donation?</Text>
                    </View>
                    <Text style={styles.text3}>Yes</Text>

                   
                    <View style={styles.detail}>
                    <Image source={require('./assets/black-circle.png')} style={styles.image1} />
                    <Text style={styles.text2}>nominals?</Text>
                    </View>
                    <Text style={styles.text3}>No signs</Text>
                    <View style={styles.detail}>
                    <Image source={require('./assets/black-circle.png')} style={styles.image1} />
                    <Text style={styles.text2}>Levels?</Text>
                    </View>
                    <Text style={styles.text3}>No signs</Text>
                    
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

export default connect(mapStateToProps, mapDispatchToProps)(withNavigation(Results));