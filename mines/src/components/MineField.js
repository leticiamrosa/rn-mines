import React from 'react';
import { View, StyleSheet } from 'react-native';
import Field from './Field';

export default props => {
    // resultado da função createMineBoard cai dentro de board
    const rows = props.board.map((row, r) => {
        const columns = row.map((field, c) => {
            // Field é referente ao objeto criado em createBoard
            // Ele pega os atributos do objeto e coloca dentro do componente Field
            // Exemplo de como adicionar props dentro dos components através do map
            return <Field {...field} key={c}/>
        })
        return <View key={r}>{columns}</View>
    })
    return <View style={{flexDirection: 'row'}}>{rows}</View>
}

const styles = StyleSheet.create({
    container: { 
        flexDirection: 'row',
        backgroundColor: '#eee',
    },
});