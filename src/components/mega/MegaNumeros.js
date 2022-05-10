import React from 'react'
import {Text, View, StyleSheet} from 'react-native'
import styleOut from '../style'

export default ({numeros}) => {
    return (
        <View style={style.Container}>
            <Text style={[styleOut.fontM, style.Num]}>
                {numeros}
            </Text>
        </View>
    )
}

const style = StyleSheet.create({
    Container: {
        backgroundColor: '#188038',
        height: 50,
        width: 50,
        margin: 5,
        borderRadius: 25,
    },
    Num: {
        textAlign: 'center',
        color: "#FFF"
    }
})