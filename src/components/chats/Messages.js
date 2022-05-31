import { API, graphqlOperation } from "aws-amplify";
import { useState, useEffect } from "react"
import * as queries from '../../graphql/queries';
import "./chat.css"
import '@aws-amplify/pubsub'
import * as subscriptions from '../../graphql/subscriptions'
const Messages = ({clickCreateChat, currentUser, messages, setMessages, activeFriend}) => {
    
    useEffect(() => {
        API.graphql({
            query: queries.messagesByChannelID, 
            variables: {
                channelID: activeFriend.id,
                sortDirection: 'ASC'
            },
            authMode: "AMAZON_COGNITO_USER_POOLS"
        })
        .then ((response) => {
            const items = response.data?.messagesByChannelID?.items
            if (items) {
                setMessages(items)
            }
        })
        // getMessages()
    }, [activeFriend])

    // async function getMessages() {
    //     await  API.graphql({
    //         query: queries.messagesByChannelID, 
    //         variables: {
    //             channelID: activeFriend.id,
    //             sortDirection: 'ASC'
    //         },
    //         authMode: "AMAZON_COGNITO_USER_POOLS"
    //     })
    //     .then ((response) => {
    //         const items = response.data?.messagesByChannelID?.items
    //         if (items) {
    //             setMessages(items)
    //         }
    //     })
    // }

    useEffect(() => {
        const subscription = API.graphql(
            graphqlOperation(subscriptions.onCreateMessage)
        ).subscribe({
            next: (e) => {
                setMessages([...messages, e.value.data.onCreateMessage])
            }
        })
        return () => {
            subscription.unsubscribe()
        }
    },[messages])
    
    return (
        <>
        {!activeFriend
            ?
            <>
            <div className="no-active-messages">
                <div>
                    No messages yet...Let's start chatting!
                </div>
            </div>
               
            </>
            :
            <>
            {!messages 
                ?
                <div>Loading...</div>
                :
            messages?.map((message) => (
                <div
                    key={message.id}
                    className={message.author ===  currentUser?.username ? 'message me' : 'message'}
                >
                    {message.body}
                </div>
            ))
            }
            </>
        }
        
        </>
    )
    
}
export default Messages