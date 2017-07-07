const mongoose = require('mongoose')
const model = mongoose.model('Usuario')

  // arrumei soh esse
const adiciona = (req, res) => 
  model.create(req.body)
        .then( ( usuario ) => res.json( usuario ) )
        .catch( ( error ) => {
          console.log( error )
          res.status( 500 ).json( error )
        } )

const atualiza = function(req, res) {

  model
    .findByIdAndUpdate(req.params.id, req.body)
      .then(function(usuario) {
        res.json(usuario)

      }, function(error) {
        console.log(error)
        res.status(500).json(error)
      })

}

const lista = function(req, res) {

  model
    .find({})
    .then(function(usuarios) {
      res.json(usuarios)

    }, function(error) {
      console.log(error)
      res.status(500).json(error)
    })

}

const buscaPorId = function(req, res) {

  model
    .findById(req.params.id)
      .then(function(usuario){
        if(!usuario) throw Error('usuario não encontrada')
        res.json(usuario)

      }, function(error){
        console.log(error)
        res.status(500).json(error)
      })

}

const removePorId = function(req, res) {

  model
    .remove({_id: req.params.id})
      .then(function(){
        res.sendStatus(204)
      }, function(error) {
        console.log(error)
        res.status(500).json(error)
      })

}

const api = {
  adiciona,
  atualiza,
  lista,
  buscaPorId,
  removePorId
}

module.exports = api
