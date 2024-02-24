import { View } from 'react-native'
import React from 'react'
import { GiftedChat } from 'react-native-gifted-chat'
import { useState, useEffect, useCallback } from 'react'
import GlobalApi from '../Shared/GlobalApi'

export default function Chat() {

    const [messages, setMessages] = useState([]);
    const [loading, setLoading] = useState(false);
    
  useEffect(() => {
    setMessages([
      {
        _id: 1,
        text: 'Hello !',
        createdAt: new Date(),
        user: {
          _id: 2,
          name: 'Chat Bot',
        },
      },
    ])
  }, [])

  const onSend = useCallback((messages = []) => {
    setMessages(previousMessages =>
      GiftedChat.append(previousMessages, messages))
      setLoading(true)
    if(messages[0].text){

        getBardResp(messages[0].text)
    }
  }, [])

  const getBardResp=(msg)=>{
  
   GlobalApi.getBardApi(msg).then(resp=>{
       console.log(resp)
        if(resp.data.resp[1].content)
        {
            const chatAIResp={
                _id: Math.random()* (9999999 - 1),
                text: resp.data.resp[1].content,
                createdAt: new Date(),
                user: {
                  _id: 2,
                  name: 'Chat Bot', 
                  avatar:''         
              }
            }
            setMessages(previousMessages => GiftedChat.append(previousMessages, chatAIResp))
            setLoading(false)
        }
        else{
          setLoading(false)
          const chatAIResp={
            _id: Math.random()* (9999999 - 1),
            text: "Sorry, I Can't Help with it!",
            createdAt: new Date(),
            user: {
              _id: 2,
              name: 'Chat Bot', 
              avatar:''         
          }
        }
        setMessages(previousMessages => GiftedChat.append(previousMessages, chatAIResp))
        }
    })
}

  return (
    <View style={{flex:1}}>
      <GiftedChat
      messages={messages}
      isTyping={loading}
      onSend={messages => onSend(messages)}
      user={{
        _id: 1,
      }}
    />
    </View>
  )
}
