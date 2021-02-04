/**
 ******** Variables*********
 * Qu'est ce qu'une variable: c'est comme un (container ou une boîte) dans lequel on peut stocker des objets.
 * Une variable est donc une zone de memoire destiné à stocker(entreposer) une information.
 * On peut recupérer le contenu de cette boîte pour s'en servir ou le remplacer par autre chose.
 * 
 * On dispose de trois composants pour décrirer une variable:
 * 
 * Son nom: Une variable doit commencer par une lettre. Le caractère du tiret du 6(-) n'est pas autorisé car il 
 * correspond à l'opérateur de soustraction. Une variable est sensible à la casse. La phase de création d'une 
 * variable est appelée déclaration. Elle peut se faire avec les opérateurs (var, let, const).
 * 
 * Son type: c'est l'information ou la donnée que la variable enregistre. Il exitste les types primitifs et le types complexes.
 * 
 * Sa valeur: c'est la valeur que renvoie le type de la variable (types primitifs ou types complexes).
 * 
 * 
 * Les types primitifs: Number, String, Booléens, Undefined, Null, Symbols.
 * Les types complexes: object(objet), Array(tableaux).
 * 
 * 
 * 
 */

 let maVariable = "valeur";
 let maSecondeVariable = maVariable;
// Les deux variables ont les mêmes valeurs, et chaque variable reste indépendante l'une par rapport.
 console.log(maVariable);
 console.log(maSecondeVariable);
// Le fait de changer la valeur de la variable maSecondeVariable qui a comme valeur de départ maVriable n'a
// aucune influence sur la variable (maVariable). 
 maSecondeVariable = 25;

 console.log(maSecondeVariable);
 console.log(maVariable);

 /**
  * *****Object*******
  * Un objet est un type complexe, il peut contenir plusieurs types de données. Ce sont des paires clés/valeurs écrits au format JSON.
  * Un objet est un ensemble de données stocker dans des propriètés et des méthodes.
  * Les objets en javascript servent à encapsuler des données et des fonctionnalités qui font de ces objets des composants réutilisables.
  * 
  * Il existe 2 façons pour créer un objet(*******a revoir*****)
  * 
  * Propièté: est une donnée qui est constituée d'une clé et d'une valeur. On peut assimiler une proprièté comme rassemblant à une variable.
  * En réalité  tout ce qui définit un objet est une proprité.
  * 
  * Méthode: est une notion qui permet de distinguer les propriètés qui sont définies à l'aide d'une function
  * 
  */

  let monObjet = {
      titre: "ordinateur",
      marque: "asus",
      annee: 1998,

      marche(){
          console.log(this.marque)
          this.annee;
      },

  }

  console.log(monObjet.marche())


/***
 * ****tableau ou Array******
 * 
 * Un array est un ensemble de données ordonnées qui se trouve sur une liste. Un array permet de créer une liste de valeurs ou
 * d'objets. Grace à l'Array on peut trier ou afficher les données. Chaque élément d'un array possède un indice en javascript.
 * Le premier indice débute à partir de zéro [0](avec donc pour premier indice le chiffre zéro).
 * 
 */

 let monArray = ["los angeles", "lakers", "boston celtics", 15, 
    {
        "sport": "basket",
         equipe: "Lakers",
         victoire: 74

    },
    "Lebron James"
]

console.log(monArray[4]["sport"])

/**
 * *******Erreurs*******
 * 
 * Ils existes trois  types d'erreurs:
 * 
 *Erreur de Syntax: Il peut s'agir d'une faute de frappe, de l'oublie d'une virgule, d'un crochet ou une faute d'orthographe sur un mot clé.
 * 
 *Erreur de Logique: Elle peut survenir quant on fait une erreur lors de l'affectation d'une valeur erronée à une variable.
 * Quand on mélange les conditions dans les instructions if.
 * Quand il y'a aussi une erreur d'ordre d'écriture dans les lignes ou blocs de codes.
 * 
 * Erreur d'executions: Survient quand il y'a problème de connexion réseau, une erreur humaine ou de saisie.
 * Dans les situations ou l'on peut anticiper ces soucis, on peut prévoir un code de traitement d'erreur.
 * Avec une condition if/else pour vérifier la validité des données.
 * 
 * 
 * 
 */
 