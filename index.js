var Produit = function(){
  this.objet = objet;
  this.prix = function(tva){
    a*1,05;
  }
var baguette = new Produit( 'Baguette', 0.85); // prix HT
baguette.prix = a
console.log(baguette.prix)
var croissant = new Produit( 'Croissant', 0.80);

var Panier = function() {
  this.ajoute = function(){
}
  this.retire =function(){
}
}
var panier = new Panier();
panier.ajoute(baguette);
panier.ajoute(croissant);

console.log(panier.totalHT);
console.log(panier.totalTTC); 
}