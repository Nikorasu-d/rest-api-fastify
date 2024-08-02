export default (error, req, res) => {

    const {statusCode, message} = error
  
    const replyMessage = {
        message : statusCode,
        value : `From Handler: ${message}`
    }
    
    res.status(error.statusCode).send(replyMessage)
}