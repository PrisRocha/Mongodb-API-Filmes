# Mongodb-API-Filmes

[GET] "/"	
lista todos os filmes cadastrados

[GET] "/"	
criar um novo filme a partir do corpo da requisição

[POST] "/:id"	
A partir do route params id, busca um filme para listá-lo.

[PATCH] "/:id"	
A partir do route params id, busca um filme para alterar uma informação específica que será passada pelo corpo da requisição.

[DELETE] "/:id"	
A partir do route params id, busca um filme para deletá-lo.

# Schema

    . titulo
       . type
       . required
    . ano
       . type
       . required
    . sinopse
       . type
       . required
    . direcao
       . type
       . required
    . atores
       . type
       . required
    . genero
       . type
       . required
    . idiomas
       . type
       . required
    . criadoEm
       . type
       . required
       . default

# MODELO - JSON

   {
        "titulo": "String",
        "ano": Number,
        "sinopse": "String",
        "direcao": " String",
        "atores": "Array",
        "genero": "Array",
        "idiomas": "Array"
    }
