const Filme = require('../models/filmes')

const listaFilmes = async (req, res) => {
    const filmes = await Filme.find() 
    res.status(200).json(filmes) 
}

const listaUmFilme = async (req, res) => {
    const filme = await Filme.findById(req.params.id)

    if (filme == null) {
        return res.status(404).json({ message: 'filme não encontrado!' })
    }

    res.json(filme)
}

const criaFilme = async (req, res) => {
  
    const filme = new Filme({
        titulo: req.body.titulo,
        ano: req.body.ano,
        sinopse: req.body.sinopse,
        direcao: req.body.direcao,
        atores: req.body.atores,
        genero: req.body.genero,
        idiomas: req.body.idiomas,
        criadoEm: req.body.criadoEm
    })
    
    try {
        const novoFilme = await filme.save() 
        res.status(201).json(novoFilme) 
    } catch (err) { 
        res.status(400).json({ message: err.message })
    }
}
const atualizaFilme = async (req, res) => {
    try {
        const filme = await Filme.findById(req.params.id)
        if (filme == null) {
            return res.status(404).json({ message: 'filme não encontrado!' })
        }
        if (req.body.titulo != null) {
            filme.titulo = req.body.titulo
        }
        if (req.body.ano != null) {
            filme.ano = req.body.ano
        }
        if (req.body.direcao != null) {
            filme.direcao = req.body.direcao
        }
        if (req.body.atores != null) {
            filme.atores = req.body.atores
        }
        if (req.body.genero != null) {
            filme.genero = req.body.genero
        }
        if (req.body.idiomas != null) {
            filme.idiomas = req.body.idiomas
        }
        if (req.body.criadoEm != null) {
            filme.criadoEm = req.body.criadoEm
        }
        const filmeAtualizado = await filme.save()
        res.status(200).json(filmeAtualizado)

    } catch (err) {
        res.status(500).json({ message: err.message })
    }
}

const deletaFilme = async (req, res) => {
    try {
        const filme = await Filme.findById(req.params.id)
        if (filme == null) {
            return res.status(404).json({ message: 'Filme não encontrado!' })
        }
        await filme.remove()
        res.json({ message: 'Filme deletado com sucesso!' })
    } catch (err) {
        return res.status(500).json({ message: err.message })
    }
}

module.exports = {
    listaFilmes,
    listaUmFilme,
    criaFilme,
    atualizaFilme,
    deletaFilme,
}