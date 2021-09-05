const mongoose = require("mongoose");
const articleModel = require("./article");

mongoose.connect("mongodb://localhost:27017/aprendendoMongo");

const Article = mongoose.model("Article",articleModel)

/*Update
Article.findByIdAndUpdate("6133e8442a6cdd2118aa0404",{title: "Winner !", author: "Bandelli Bruno", body: "every body hands up !"}).then(() => {

    console.log("Update!")

}).catch(err => {

    console.log(err)

})
*/






/*Remoção de dados
Article.findByIdAndDelete("6133ec12c958cf5638abb150").then(() => {
    console.log("Dado removido!");
}).catch(err => {
    console.log(err);
})
*/







/*Pesquisa com dados que não existem.
Article.findOne({'resume.content': 'fFfFfdfscwr'}).then(article => {
    console.log(article)
}).catch(err => {
    console.log(err)
})
*/







/* Pesquisa uma por vez ( essa condição retorna a primeira que ele achar )
Article.findOne({'resume.content': 'bla bla bla'}).then(article => {
    console.log(article)
}).catch(err => {
    console.log(err)
})
*/













/*Busca por Objeto
Article.find({'resume.content': 'bla bla bla'}).then(article => {
    console.log(article)
}).catch(err => {
    console.log(err)
})
*/






/*Pesquisa com 2 informações
Article.find({'author':'Coder Bruno Bandelli','body':'Block Chain'}).then(article => {
    console.log(article)
}).catch(err => {
    console.log(err)
})
*/





/*Pesquisa por autor
Article.find({'author':'Coder Bruno Bandelli'}).then(article => {
    console.log(article)
}).catch(err => {
    console.log(err)
})
*/


/*Pesquisa por id.
Article.find({'_id':'6133f0406dfade139f5bedf4'}).then(article => {
    console.log(article)
}).catch(err => {
    console.log(err)
})
*/





/*Busca Completa*/
Article.find({}).then(articles => {
    console.log(articles);
}).catch(err => {
    console.log(err);
});





















/*Cadastro
const artigo = new Article({
    
    title: "Beautiful World !",
    author: "Coder Bruno Bandelli",
    body:"Block Chain",
    special: true,
    resume: {
        content: "bla bla bla",
        author: "teste!"
    }
}); 

artigo.save().then(() =>{

    console.log("Artigo Salvo !")

}).catch(err => {

    console.log(err);

})*/