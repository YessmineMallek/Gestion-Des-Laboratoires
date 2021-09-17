import { Directeur } from "./directeur";

export class Laboratoire {
    private code!: String;
	
	private type!: String;
	
	private denomination!: String;
	
	private nomCompletEnArabe!: String;
	
	private nomCompletEnAnglais!: String;
	
	private acronyme!: String;

    private dateCreation!: Date;
	private universite!: String; 
	private institution!: String;
	private domaine!: String; 
	private discipline!: String; 
	private specialite!: String; 
	private siteWeb!: String;
	private adresseOfficielle!: String;
	private telephone!: String;
	private fax!: String;
	private directeurCin: Directeur ;


     constructor( code: String,  type: String,  denomination: String,  nomCompletEnArabe: String,
         nomCompletEnAnglais: String,  acronyme: String,  dateCreation: Date,  universite: String,  institution: String,
         domaine: String,  discipline: String,  specialite: String,  siteWeb: String,  adresseOfficielle: String,
         telephone: String,  fax: String,  directeurCin: Directeur) {
            this.code = code;
            this.type = type;
            this.denomination = denomination;
            this.nomCompletEnArabe = nomCompletEnArabe;
            this.nomCompletEnAnglais = nomCompletEnAnglais;
            this.acronyme = acronyme;
            this.dateCreation = dateCreation;
            this.universite = universite;
            this.institution = institution;
            this.domaine = domaine;
            this.discipline = discipline;
            this.specialite = specialite;
            this.siteWeb = siteWeb;
            this.adresseOfficielle = adresseOfficielle;
            this.telephone = telephone;
            this.fax = fax;
            this.directeurCin = directeurCin;
        
    }
}
