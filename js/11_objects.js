  // Les OBJETS
  let primitive = "Je suis une primitive";
  let moi = {
      prenom: 'Mariam',
      nom: "Ouédraogo",
      age: 44,

      identite: function() {
          return this.prenom + ' ' + this.nom + ' ' + this.age + ' ' + 'ans';
      }
  }

  alert(moi.identite());

  // Les fonctions constructeurs
  /**
   * 
   * @param {string} p = prenom de la personne
   * @param {string} n = nom de la personne
   * @param {string} a = âge de la personne
   */
  function Identite(p, n, a) {
      this.prenom = p;
      this.nom = n;
      this.age = a;
  }

  let toi = new Identite('Anna', "Olivia", 42);
  let il = new Identite('Olivier', 'LeRoi', 50);

  alert(`Prenom de toi : ${toi.prenom} \n Prenom de il : ${il.prenom}`);