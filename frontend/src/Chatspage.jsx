import { MultiChatSocket, MultiChatWindow, useMultiChatLogic  } from 'react-chat-engine-advanced'

const ChatsPage = (props) => {
    const chatProps = useMultiChatLogic(
        'a681587f-fc58-4e6b-824a-dbbaf3bc9c5a', 
        props.user.username, 
        props.user.secret
    );
    return (
        <div style={{height: '100vh'}}>
            <MultiChatSocket {...chatProps}/>
            <MultiChatWindow {...chatProps} style={{height: '100%'}}/>
        </div>
    )
}

export default ChatsPage;