const info = (req, res) => {
  return res.json({
    success: true,
    msg: "info",
    data: {},
    error: {}
  })
}


module.exports = {
  info
}