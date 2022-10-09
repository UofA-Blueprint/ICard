import React from 'react';
import {StyleSheet, TextInput, View, Keyboard, Button} from 'react-native';
import {Feather, Entypo} from '@expo/vector-icons';
<<<<<<< HEAD
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';
=======
<<<<<<< HEAD
>>>>>>> 57731ef (need to fix styling)
=======
>>>>>>> 7fd9c6c (Fixed conflict)
>>>>>>> 75c0bec (Fixed conflict)


const SearchBar = ({clicked, setClicked, searchPhrase, setSearchPhrase}) => {
    return (
        <View style={styles.container}>
            <View style={
                clicked ? styles.searchBar__clicked : styles.searchBar__unclicked
            }>
<<<<<<< HEAD

                <TextInput
                    style={styles.input}
                    placeholder='Search coupons ...'
=======
                <Feather
                    name='search'
                    size={20}
                    color='black'
                    style={{marginLeft: 1}}
                />

                <TextInput
                    style={styles.input}
                    placeholder='search'
<<<<<<< HEAD
>>>>>>> 57731ef (need to fix styling)
=======
>>>>>>> 7fd9c6c (Fixed conflict)
>>>>>>> 75c0bec (Fixed conflict)
                    value={searchPhrase}
                    onChangeText={setSearchPhrase}
                    onFocus={() => {
                        setClicked(true);
                    }}
                />

<<<<<<< HEAD
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
        
=======
            </View>
            
            {clicked && (
                <View>
                    <Button
                        title='cancel'
                        onPress={() => {
                            Keyboard.dismiss();
                            setClicked(false);
                            setSearchPhrase('');
                        }}
                    />
                </View>
            )}
<<<<<<< HEAD
>>>>>>> 57731ef (need to fix styling)
=======
>>>>>>> 7fd9c6c (Fixed conflict)
>>>>>>> 75c0bec (Fixed conflict)
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
<<<<<<< HEAD
        backgroundColor: "white",
        borderRadius: 30,
=======
        backgroundColor: "#d9dbda",
        borderRadius: 15,
<<<<<<< HEAD
>>>>>>> 57731ef (need to fix styling)
=======
>>>>>>> 7fd9c6c (Fixed conflict)
>>>>>>> 75c0bec (Fixed conflict)
        alignItems: "center",
      },
      searchBar__clicked: {
        padding: 10,
        flexDirection: "row",
<<<<<<< HEAD
        width: "95%",
        backgroundColor: "white",
        borderRadius: 30,
=======
        width: "80%",
        backgroundColor: "#d9dbda",
        borderRadius: 15,
<<<<<<< HEAD
>>>>>>> 57731ef (need to fix styling)
=======
>>>>>>> 7fd9c6c (Fixed conflict)
>>>>>>> 75c0bec (Fixed conflict)
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