const home = (req, res) => {
  return res.json({
    success: true,
    msg: "home",
    data: {},
    error: {}
  })
}


module.exports = {
  home
}