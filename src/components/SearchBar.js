import React from 'react';
import { View , Text , StyleSheet , TextInput } from 'react-native';
import { Feather } from '@expo/vector-icons';

const SearchBar = ({term , onTermChange , onTermSubmit}) => {


    return (
        <View style={styles.backgroundStyle}>
            <Feather name="search"  style={styles.iconStyle} color="black" />
            <TextInput 
                onEndEditing={() => onTermSubmit()}
                autoCapitalize="none" 
                autoCorrect={false}
                onChangeText={newTerm => onTermChange(newTerm)}
                value={term}
                style={styles.inputStyle}
                placeholder="Search"
            />
        </View>
    );
}

const styles = StyleSheet.create({
    backgroundStyle: {
        marginTop: 10,
        backgroundColor: '#00EEEF' ,
        height: 50 ,
        borderRadius: 5,
        marginHorizontal: 15 ,
        flexDirection: 'row' ,

    } ,
    inputStyle: {
        fontSize: 18,
        flex: 1
    } ,
    iconStyle: {
        fontSize: 35 ,
        alignSelf: 'center' ,
        marginHorizontal: 15
    }
});

export default SearchBar;