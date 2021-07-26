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

import { withNavigation} from 'react-navigation';
import { Button } from 'react-native-paper';
import NavBar from './NavBar'
import { Appbar, Title, ToggleButton } from 'react-native-paper';

class ScreenOne extends React.Component {
  constructor(props) {
    super(props);
  }

  state = {
    search: '',
    _swipeableRow: null,
    currentAdIndex: 0,
  };

  onFocusFunction = () => {
    // do some stuff on every screen focus
    // this.props.updateScreenVar({screen:'buyerProducts'});
    // console.log("buyerProducts focused");
  }

  // and don't forget to remove the listener
  componentWillUnmount () {
    // this.focusListener.remove()
  }

  componentDidMount() {
    // var dbref = this.props.products.dbh.ref('products');

    const itemsRef = Fire.getFire().database().ref('records/');

    // console.log('snap.val()');

    itemsRef.on('value', (snap) => {

      // get children as an array
      var items = [];
      snap.forEach((child) => {
        
        console.log(child);

        let tempJson = child.toJSON();
        tempJson['id'] = child.key;

        items.push(tempJson);

        // items.push({
        //   name: child.val(),
        //   _key: child.key
        // });
      });

      console.log(items);

      this.props.updateProducts(
      {
          liveProductList: items
        }
      );

      // this.setState({
      //   dataSource: this.state.dataSource.cloneWithRows(items)
      // });

    });
    
  }

  componentDidUnMount() {
    // this.props.products.dbulref.off('value');
    console.log("unmountedddddddd");
  } 


  render() {

    // const { navigation } = this.props;
    // const { search } = this.props.products.search;    
    
    const llist = [0, 1, 2, 3, 4, 5,1, 2, 3, 4, 5,1, 2, 3, 4, 5, 1, 2, 3, 4, 5];

    return (
      <View style={{flex:1}}>

          <View>


              { <ScrollView>

                      {/* <List> */}
                      {
                      // list.map((l, i) => (
                      // var l = [0, 1, 2, 3, 4, 5]
                      this.props.products.liveProductList.map((l, i) => (
                      // llist.map((l, i) => (
                          
                          // {console.log(i);}

                          <ListPaper.Item
                          onPress={()=>{this.props.navigation.navigate('Results')}}
                              key={i}
                              title={l['firstName'] + ' ' + l['lastName']}
                              description="Item description"
                              left={props => <ListPaper.Icon {...props} icon="folder" />}
                          />
                          
                      ))
                      }
                      {/* </List> */}


              </ScrollView> }
              <Button 
                onPress={() => this.props.navigation.navigate('Add')}
                // onPress={() => console.log('Add')}
                >
                Add Patient
              </Button>
          </View>
        </View>
      

      // implemented without image without header, using ListItem component
      
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

export default connect(mapStateToProps, mapDispatchToProps)(withNavigation(ScreenOne));