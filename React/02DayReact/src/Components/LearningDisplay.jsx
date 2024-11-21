import Message from './Message'
function LearningDisplay(){
    return(
        <>
        <h1>Hello World </h1>
        {/* Function Call */}
        {Message()} 
        {Message()} 
        {Message()} 
        
        {/* HTML FORM */}
        {/* OPening and closing Tag */}
        <Message></Message>
        {/* Self closing tag */}
        <Message/>
        
        </>
    )
}
export default LearningDisplay