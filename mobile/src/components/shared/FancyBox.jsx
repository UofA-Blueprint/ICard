import React from 'react';
import {View, StyleSheet} from 'react-native';
import {colors} from '../../utilites/Theme';


const FancyBox = (props) => {
    return(
        <View style = {{...styles.container, ...props.style}}>
            {props.children}
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        
        height: '12%',
        width: '95%',
        backgroundColor: colors.white,
        borderTopLeftRadius: 30,
        borderBottomLeftRadius: 30,
        borderTopRightRadius: 30,
        borderBottomRightRadius: 30,
        marginHorizontal: 10,
        elevation: 20,
        shadowColor: colors.black,
        shadowOffset: {width: 2, height: 4},
        shadowOpacity: 0.4,
        shadowRadius: 30,
        
        
    }
})

export default FancyBox;