const verificarCargo = function (req, res, next) {
    const cargo = req.body.cargo

    if(cargo !== "lider"){
        return res.status(400).json({message: "Cargo não aceito."})
    }

    next()
  }

  module.exports = {
    verificarCargo
  }