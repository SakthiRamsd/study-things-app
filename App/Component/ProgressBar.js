import { View, Text, Dimensions } from 'react-native'
import React from 'react'

export default function ProgressBar({perc}) {

        const screenWidth = Dimensions.get('screen').width*.8;
        const progressWidth = screenWidth*perc;

  return (
    
    <View style={{marginTop:9,marginLeft:-12,backgroundColor:'lightgray'}}>
         <View style={{height:6,backgroundColor:'red',borderRadius:99,width:progressWidth}}>
    </View>
    </View>
    

    
  )
}