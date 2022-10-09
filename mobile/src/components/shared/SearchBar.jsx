import React from 'react';
import {StyleSheet, TextInput, View, Keyboard, Button} from 'react-native';
import {Feather, Entypo} from '@expo/vector-icons';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';


const SearchBar = ({clicked, setClicked, searchPhrase, setSearchPhrase}) => {
    return (
        <View style={styles.container}>
            <View style={
                clicked ? styles.searchBar__clicked : styles.searchBar__unclicked
            }>

                <TextInput
                    style={styles.input}
                    placeholder='Search coupons ...'
                    value={searchPhrase}
                    onChangeText={setSearchPhrase}
                    onFocus={() => {
                        setClicked(true);
                    }}
                />

                {!clicked && (
                    <Feather
                        name='search'
                        size={20}
                        color='black'
                        style={{marginLeft: 1}}
                    />
                )
                }

                {clicked && (
                    <View>
                        <Pressable
                            onPress={() => {
                                Keyboard.dismiss();
                                setClicked(false);
                                setSearchPhrase('');
                            }}
                        >
                            <Entypo
                                name='cross'
                                size={20}
                                color='black'
                                style={{marginLeft: 1}}
                            />
                        </Pressable>
                    </View>
            )}              
            </View>
        
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        margin: 15,
        justifyContent: "flex-start",
        alignItems: "center",
        flexDirection: "row",
        width: "90%",
    
      },
      searchBar__unclicked: {
        padding: 10,
        flexDirection: "row",
        width: "95%",
        backgroundColor: "white",
        borderRadius: 30,
        alignItems: "center",
      },
      searchBar__clicked: {
        padding: 10,
        flexDirection: "row",
        width: "95%",
        backgroundColor: "white",
        borderRadius: 30,
        alignItems: "center",
        justifyContent: "space-evenly",
      },
      input: {
        fontSize: 20,
        marginLeft: 10,
        width: "90%",
      }
})

export default SearchBar;