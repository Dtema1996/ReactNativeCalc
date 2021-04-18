import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {SafeAreaView} from "react-native-web";

export default function App() {
    return (
        <View style={styles.container}>
            <StatusBar style="light-content" />
            <SafeAreaView>
                <Text style={styles.value}>75</Text>
            </SafeAreaView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#202020',
        justifyContent: 'flex-end',
    },
    value: {
        color: "#fff",
        fontSize: 40,
        textAlign: "right",
        marginRight: 20,
    },
});
