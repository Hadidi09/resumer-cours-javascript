/**
 ******** Variables*********
 * Qu'est ce qu'une variable: c'est comme un (container ou une boîte) dans lequel on peut stocker des objets.
 * Une variable est donc une zone de memoire destiné à stocker(entreposer) une information.
 * On peut recupérer le contenu de cette boîte pour s'en servir ou le remplacer par autre chose.
 * 
 * On dispose de trois composants pour décrire une variable:
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

 /**
  * *********Fonctions*******
  * 
  * Ce sont des blocs de codes auxquels on attribue un nom, avec à l'intérieur des instructions. Pour éxecuter les instructions qui se trouve à l'interieur
  * de cette fonction(on l'appel).
  */

  /**
   * **Méthodes d'instances et de champs**
   * 
   * Est l'action de créer un objet à partir d'un modèle.
   * 
   * Avec deux opérations (l'allocation qui permet de reserver une place mémoire et l'initialisation qui consiste à fixer l'état du nouvel objet)
   * 
   * Une méthode d'instance est une fonction faisant partie d'une classe et qui agit sur une instance de cette classe.
   */

   /**
    * *** Clean Code ***
    * 
    * DRY: Don't repeat yourself ( ne pas se repéter). 
    * Si dans notre code, on a tendance à se répeter il faudra faire une refactorisation.
    * 
    * Refactorisation: Qui permet  de changer la structure des éléments sans modifier leurs comportement.
    * 
    */




    /////////////////////////////


    /**
     * *****************DOM******
     * 
     * DOM: Veut dire (Document Object Model). C'est une interface de programmation qui est une répresentation
     * du HTML de la page web. Le DOM permet d'accéder aux éléments de la page web et de les modifier avec le language JS.
     * Le DOM permet donc d'interagir avec lui .
     * 
     * Exemple: Le schéma du DOM est semblable à un arbre( qui a plusieurs enfants, qui ont eux aussi d'autres enfants etc...).
     *  
     */
      

     /**
      * **Document**
      * Le document représente la page et il contient des fonctions. 
      * 
      * Parmi Les deux principales proriètés qui nous permettent de modifier directement un élément il y'a:
      * InnerHTML et textContent. Il y'a aussi InnerText.
      */


      /**
       * **Modifier les classes**
       * 
       * Avec la proprieté ClassList il est possible d'accéder directement, à la liste des classes d'un élément.
       * ClassList fournit une série de fonctions permettant de modifier cette liste de classes.
       * Comme:
       *       Classlist.add
       *       ClassList.remove
       *       ClassList.Contains
       *       ClassList.replace
       * 
       * 
       */

       /**
        * **Changer les styles d'élement**
        * 
        *  Style: est un objet pour chaque style éxistant.
        */


        /**
         * **Modifier les attributs**
         * 
         * Avec setAttribute,getAttribute et removeAttribute pour définir ou remplacer les attributs d'un element.
         * 
         */

         /**
          * **Créer de nouveaux éléments**
          * 
          * Avec la méthode CreatElement(). Un élément crée avec cette méthode ne fais pas encore partie du document.
          * Il faudra l'ajouter en tant qu'enfant d'un élément.
          * 
          */
        
        /**
        * **Ajouter des enfants**
        * 
        * Avec la méthode appendChild(). Qui est une fonction qui permet d'ajouter un élément à la liste des enfants du parent
        * dépuis lequel il est appelée. 
        */