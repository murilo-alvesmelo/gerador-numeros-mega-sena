import React from "react"
import {View, StyleSheet, SafeAreaView} from 'react-native'
import { Mega } from "./src/components/mega/Mega"

export default () => (
        <SafeAreaView style={style.App}>
            <Mega qtdNumeros={6}/>
        </SafeAreaView>
)

const style = StyleSheet.create({
    App: {
        backgroundColor: '#9DD6F6',
        flexGrow: 1,
        justifyContent: "center",
        alignItems: 'center',
        padding: 20
    }
})