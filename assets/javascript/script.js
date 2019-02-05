class Voiture {
  constructor(vitesse, masse) {
    this.vitesse = vitesse;
    this.masse = masse;
  }
  calculerEnergie(){
    return 0.5*this.masse*(this.vitesse**2);
  }
  resultatCalculEnergie(){
    let resultat=this.calculerEnergie();
    return resultat+" joules";
  }
};
var voiture1=new Voiture(130,1200);
Voiture.marque="Tesla";
Voiture.model="P1000D";
document.write(voiture1.resultatCalculEnergie());
