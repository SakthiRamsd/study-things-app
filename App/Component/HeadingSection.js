import React from 'react'
import { Text } from 'react-native'

function HeadingSection({heading}) {
  return (
    <Text style={{fontFamily:'PTSerif-BoldItalic',color:'#0073e6',fontSize:19, marginBottom:12,paddingLeft:5}}>{heading}</Text>
  )
}

export default HeadingSection