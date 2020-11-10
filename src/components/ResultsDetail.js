import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'

const ResultsDetail = ({result}) => {
    return (
        <View style={styles.container} >
        <Image style={styles.imageStyle} source={{ uri: result.image_url }} />
            <Text style={styles.nameStyle} >{result.name}</Text>
            <Text>{result.rating} Stars, {result.review_count} Reviews</Text>
            <Text></Text>
        </View>
    )
}

export default ResultsDetail

const styles = StyleSheet.create({
    imageStyle: {
        width: 250,
        borderRadius: 4,
        height: 120,
        marginBottom: 5

    },
    nameStyle: {
        fontWeight: 'bold'
    },
    container: {
        marginLeft: 15
    }
})
