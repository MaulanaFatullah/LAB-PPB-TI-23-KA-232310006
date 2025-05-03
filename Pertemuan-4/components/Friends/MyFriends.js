import React, { Component } from 'react';
import { SafeAreaView, StyleSheet, View, StatusBar } from 'react-native';
import SearchBar from './widgets/SearchBar';
import ExpScrollView from '../modules/ExpScollView';
import Users from '../const-data/User';
import ExpFlatList from '../modules/ExpFlatList';
import ExpSectionList from '../modules/ExpSelectionList';

class MyFriends extends Component {
    render() {
        return (
            <SafeAreaView style={styles.container}>
                <StatusBar hidden={false} style="light" />
                
                <View style={styles.header}>
                    <SearchBar />
                </View>
                <View style={styles.body}>
                    {/* <ExpScrollView Users={Users} /> */}
                    {/* <ExpFlatList Users={Users} /> */}
                    <ExpSectionList Users={Users} />
                </View>
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "black",
    },
    header: {
        flex: 1,
        justifyContent: "center",
        paddingHorizontal:10,
        backgroundColor: "orange",
    },
    body: {
        flex: 10,
        backgroundColor: "green",
    },
});
export default MyFriends;
