import React from 'react'
import {View, Text} from 'react-native'
import Slider from '@react-native-community/slider'


export default function UdaciSlider({max, unit, step, value, onChange}){
    return (
        <View>
            <Slider
            step={step}
            value={value}
            maximumValue={max}
            minimumValue={0}
            onValueChange={onChange}
            >
            </Slider>
            <Text> {value} </Text>
            <Text> {unit}</Text>

        </View>

    )
}