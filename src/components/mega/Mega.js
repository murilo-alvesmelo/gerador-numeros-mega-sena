import React, { Component }from 'react'
import {Button, Text, TextInput, View, StyleSheet} from 'react-native'
import style from '../style'

import MegaNumero from './MegaNumeros'

export class Mega extends Component{

    state ={
        qtdNumeros: this.props.qtdNumeros,
        numeros: []
    }
    alterarQuantidadeNumero = (qtd) =>{
        this.setState({qtdNumeros: +qtd})
    }
    gerarNumero = nums =>{
        const novo = parseInt(Math.random()*60)+1
        return nums.includes(novo) ? this.gerarNumero(nums) : novo
    }
    gerarNumeros = () =>{
        const numeros = Array(this.state.qtdNumeros)
            .fill()
            .reduce(n => [...n, this.gerarNumero(n)], [])
            .sort((a, b) => a - b)
        this.setState({numeros: numeros})
    }

    exibirNumeros = () =>{
        const nums = this.state.numeros
        return nums.map(n=>{
            return <MegaNumero key={n} numeros={n}/>
        })
    }
    render(){ 
        return (
            <View>
                <Text style={style.fontG}>Gerador de Mega-Sena</Text>
                <TextInput
                    style={stylesIn.TextInput}
                    keyboardType='numeric'
                    placeholder='Quantidade de numeros'
                    value={`${this.state.qtdNumeros}`}
                    onChange={this.alterarQuantidadeNumero}
                />
                <Button
                    title='Gerar'
                    onPress={this.gerarNumeros}
                />
                <View style={stylesIn.View}>
                    {this.exibirNumeros()}
                </View>
            </View>
        )
    }
}

const stylesIn = StyleSheet.create({
    View: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
    },
    TextInput: {
        borderBottomWidth: 2, 
        textAlign: 'center',
    }
})