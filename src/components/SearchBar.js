import React from 'react'
import { StyleSheet, TextInput, View } from 'react-native'
import { Feather } from '@expo/vector-icons'
 
const SearchBar = ({ term, onTermChange, onTermSubmit }) => {
    return (
        <View style={styles.backgroundStyle} >
        <Feather name='search' style={styles.iconStyles} />
            <TextInput 
            autoCapitalize='none'
            autoCorrect={false}
            style={styles.inputStyle} 
            placeholder='search'
            value={term}
            onChangeText={onTermChange}
            onEndEditing={onTermSubmit}
            />
        </View>
    )
}


const styles = StyleSheet.create({
    backgroundStyle: {
        marginTop: 10,
        backgroundColor: '#F0AAAA',
        height: 50,
        borderRadius: 5,
        marginHorizontal: 15,
        flexDirection: 'row',
    },

    inputStyle: {
        fontSize: 18,
        flex: 1
    },

    iconStyles: {
        fontSize: 35,
        alignSelf: 'center',
        marginHorizontal: 15
    }
})

export default SearchBar