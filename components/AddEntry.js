import React, { Component } from 'react'
import { View , Text, TouchableOpacity } from 'react-native'
import { getMetricMetaInfo, timeToString, getDailyReminderValue } from '../utils/helpers'
import {Ionicons} from '@expo/vector-icons'

import {connect} from 'react-redux'
import {addEntry} from './actions'
import UdaciSlider from "./UdaciSlider"
import UdaciSteppers from "./UdaciSteppers"
import DateHeader from "./dateheader"
import TextButton from "./textbutton"

import { submitEntry, removeEntry} from "./api"
import { purple } from '../utils/colors'

function SubmitBn ({onPress}) {
    return(
        <TouchableOpacity
        onPress ={onPress }>
            <Text style={{color: purple, fontSize:25}}>SUBMIT</Text>
        </TouchableOpacity>

    )
}


class AddEntry extends Component {
    
    state ={
    run: 0,
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
        this.props.dispatch(addEntry(
            {
                [key]: entry
            }

        ))

        this.setState( ()=> ({
            run: 0,
            bike: 0,
            swim: 0,
            sleep: 0,
            eat: 0

        }))

        reset = () => {
            const key = timeToString()
            this.props.dispatch(addEntry({
                [key]: getDailyReminderValue()
            }

            ))

        }

        submitEntry({key, entry})



        removeEntry(key)




    }

    

    




    render() {
        const metaInfo = getMetricMetaInfo()
        
       
        if(this.props.alreadyLogged) {
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


function mapStateToProps (state){
    const key = timeToString()
    return {
        alreadyLogged: state[key] && typeof state[key].today === 'undefined'
    }
}

export default connect (mapStateToProps) (AddEntry)



