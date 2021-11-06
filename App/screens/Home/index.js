import React, {useEffect} from 'react';
import {View, Text} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import {connect} from 'react-redux';
import {UsrItem} from '../../components';
import {GET_ALL_USER_INFO_REQUEST} from '../../redux/actions';

import styles from './styles';

const mapStateToProps = (state, props) => {
  const {users} = state.user;
  return {users};
};

const mapDispatchToProps = (dispatch, props) => ({
  getAllUserInfo: () => {
    dispatch({
      type: GET_ALL_USER_INFO_REQUEST,
      payload: {},
    });
  },
});

const HomeView = ({users, getAllUserInfo, navigation}) => {
  useEffect(() => {
    getAllUserInfo();
  }, [getAllUserInfo]);
  return (
    <View style={styles.container}>
      <FlatList
        data={users}
        keyExtractor={item => item.id}
        renderItem={({item}) => <UsrItem item={item} />}
      />
    </View>
  );
};
export const Home = connect(mapStateToProps, mapDispatchToProps)(HomeView);
