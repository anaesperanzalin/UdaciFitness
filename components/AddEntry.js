import React, { Component } from 'react'
import { View , Text, TouchableOpacity } from 'react-native'
import { getMetricMetaInfo, timeToString } from '../utils/helpers'
import {Ionicons} from '@expo/vector-icons'

import UdaciSlider from "./UdaciSlider"
import UdaciSteppers from "./UdaciSteppers"
import DateHeader from "./dateheader"
import TextButton from "./textbutton"



function SubmitBn ({onPress}) {
    return(
        <TouchableOpacity
        onPress ={onPress }>
            <Text>SUBMIT</Text>
        </TouchableOpacity>

    )
}

export default class AddEntry extends Component {
    
    state ={
    run: 50,
    bike: 10,
    swim: 0,
    sleep: 0, 
    eat: 0,
    }
    
    increment = (metric) => {
        const {max , step} = getMetricMetaInfo(metric)

        this.setState( (state)=> {
            const count = state [metric] + step 

            return {
                ...state, 
                [metric] : count > max ?  max : count 
            }
        })


    }

    decrement = (metric) => {
        
        this.setState ( (state)=> {
            const count = state [metric] - getMetricMetaInfo(metric).step
            return {
                ...state, 
                [metric]: count < 0 ? 0: count,
            }
        })
    }


    slide = (metric, value ) => {
        this.setState(()=> ( {
            [metric]: value, 
        }))

    }

    submit = () => {
        const key = timeToString()
        const entry = this.state

        this.setState( ()=> ({
            run: 0,
            bike: 0,
            swim: 0,
            sleep: 0,
            eat: 0

        }))

    }

    reset = () => {
        const key = timetoString();

    }




    render() {
        const metaInfo = getMetricMetaInfo()
        
       
        if(true) {
                return (
                <View>
                    <Ionicons 
                    name = 'ios-happy-outline'
                    size ={100}
                    />
                    <Text>You already logged your information for today  </Text>
                    <TextButton onPress = {this.reset}> Reset </TextButton>    
                </View>
                )}
        
        return (
            <View>
            <Text> {"\n"}</Text>
            <Text> {"\n"}</Text>
            <DateHeader date= {(new Date()).toLocaleDateString()}/>
            <Text> {"\n"}</Text>
            <Text> Hi ~ {"\n"}</Text>
            <Text>{JSON.stringify(this.state)}</Text>
            
            {Object.keys(metaInfo).map( 
                
                (key) => {
                const { getIcon, type, ...rest } = metaInfo[key]
                const value = this.state[key]
                
            
                return(
                    
                    <View key={key}>
                        {getIcon()}
                        {type === "slider"
                        ? <UdaciSlider
                        value = {value}
                        onChange = {(value)=> this.slide(key, value)}
                        {...rest}
                        
                        />
                        : <UdaciSteppers
                            value ={value}
                            onIncrement = {()=> this.increment(key)}
                            onDecrement = {() => this.decrement(key)}
                            {...rest}
                        />}



                    </View>
                )
                }
                )
                }
            <SubmitBn onPress = {this.submit}/>
                
    

            </View>
        )

    }
    

}


