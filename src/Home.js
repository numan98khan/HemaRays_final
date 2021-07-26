import React from 'react';
import { View, Animated, Linking, StyleSheet, Text, Image, ScrollView, TouchableOpacity, Alert, List } from 'react-native';

// import ScreenName from '../../components/ScreenName.js'
// import { SearchBar } from 'react-native-elements';
// import { Searchbar } from 'react-native-paper';

// import { ListItem, Button, Icon, Overlay } from 'react-native-elements'

import { List as ListPaper } from 'react-native-paper';
// import { StyleSheet } from 'react-native';

// import * as firebase from 'firebase';

import Fire from './Fire';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { updateProducts } from './state/actions';

import { withNavigation } from 'react-navigation';
import { Button } from 'react-native-paper';
import NavBar from './NavBar'
import { Appbar, Title, ToggleButton } from 'react-native-paper';

class Home extends React.Component {
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
                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'flex-start',
                    alignContent: 'space-between',
                    width: '100%',
                    alignSelf: 'center',
                    height: 70,
                    elevation: 7,
                    backgroundColor: '#fff',
                    paddingHorizontal: 20,
                    alignItems: 'center'

                }}>
                    <View style={{
                        flex: 1,
                        width: 20,
                    }} >

                        <Title >Home</Title>

                    </View>


                    <View style={{
                        flex: 1,
                        //   backgroundColor: 'rgba(152, 52, 152, 0.8)',
                        // width: '10%',
                        width: 100,
                        height: '100%',
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        alignItems: 'center'

                        // padding: 10,
                    }} >

                        {/* <FAB
                  // style={styles.fab}
                  large
                  icon="plus"
                  onPress={() => this.props.navigation.navigate('Add')}
                /> */}
                        <View></View>
                        <ToggleButton
                            icon="plus"
                            value="plus"
                            status={'checked'}
                            // onPress={() => this.props.navigation.navigate('Add')}
                            onPress={() => { this.props.navigation.navigate('Add') }}
                        />




                    </View>
                </View>
                <ScrollView>
                    <Text style={styles.text}>{"Welcome Back to \n Hemarays"}</Text>
                    <View style={styles.bar}></View>
                    <View style={[styles.bar, { marginTop: 5 }]}></View>
                    <Image source={require('./assets/blood-drop.png')} style={styles.image} />
                    <TouchableOpacity style={styles.button} onPress={() => { this.props.navigation.navigate('Camera') }}>
                        <Text style={styles.buttonText}>Measure</Text>
                    </TouchableOpacity>
                </ScrollView>
                <View style={styles.buttonView}>
                    <TouchableOpacity style={styles.button1}  onPress={() => { this.props.navigation.navigate('Home') }}>
                        <Text style={styles.buttonText}>Home</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.button1,{borderLeftWidth:1,borderColor:'#fff'}]}  onPress={() => { this.props.navigation.navigate('ListData') }}>
                        <Text style={styles.buttonText}>History</Text>
                    </TouchableOpacity>
                </View>
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
    text:
    {
        fontSize: 24,
        color: 'black',
        fontWeight: 'bold',
        marginTop: 20,
        alignSelf: 'center',
        textAlign: 'center',
        lineHeight: 28
    },
    bar:
    {
        height: 1,
        backgroundColor: 'grey',
        width: '90%',
        alignSelf: 'center',
        marginTop: 30
    },
    image:
    {
        height: 100,
        width: 100,
        alignSelf: 'center',
        marginTop: '20%'
    },
    button:
    {
        height: 40,
        width: '40%',
        backgroundColor: '#cc1100',
        marginTop: 20,
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5
    },
    buttonText:
    {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 14
    },
    buttonView:
    {
        flexDirection: 'row'
    },
    button1:
    {
        height: 50,
        width: '50%',
        backgroundColor: '#cc1100',
        marginTop: 20,
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
    },

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

export default connect(mapStateToProps, mapDispatchToProps)(withNavigation(Home));