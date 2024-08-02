export default (req, res) => {

    res.status(404).send({
      message: 404,
      value: `From Handler: ${req.raw.url} not Found on Server`
    })
    
  }