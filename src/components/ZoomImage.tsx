import { Animated, StyleSheet, Text, View } from 'react-native'
import React, { useRef } from 'react'

const ZoomImage = () => {
    const scale = useRef(new Animated.Value(1)).current;
  return (
      <Animated.Image source={require('../../assets/cat-scream.jpg')} style={[styles.image,{transform:[{scale}]}]}/>
  )
}

export default ZoomImage

const styles = StyleSheet.create({
    image:{
        width:'100%',
        height:300,
        resizeMode:'contain'
    }
})