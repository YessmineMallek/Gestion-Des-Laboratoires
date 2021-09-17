import { LiteralExpr } from "@angular/compiler";
import { THIS_EXPR } from "@angular/compiler/src/output/output_ast";

export class Directeur {
    private id!:number;
    private cin!: String;
    private grade!: String;
    private email!:String
    private telephoneMobile!: String;
	private directeurDepuis!: Date;
	private nomDirecteur!: String;
    private password!: String;
	constructor(id:number, cin:String, grade:String, telephoneMobile:String,  email:String,  directeurDepuis:Date,  nomDirecteur:String,password:string) {
		this.id=id;
        this.cin=cin;
        this.grade=grade
        this.email=email
		this.telephoneMobile = telephoneMobile;
		this.directeurDepuis = directeurDepuis;
		this.nomDirecteur = nomDirecteur;
        this.password=password;
    };
  
   
}
