package BackGestionLabo.model;

import java.time.LocalDate;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
public class Directeur extends User {

	
	private String telephoneMobile;
	private LocalDate directeurDepuis;
	private String nomDirecteur;
	
	
	
	
	public Directeur() {}
	public Directeur(String cin,String grade,String password,String telephoneMobile, String email, LocalDate directeurDepuis, String nomDirecteur) {
		super(email,password,grade,cin);
		this.telephoneMobile = telephoneMobile;
		this.directeurDepuis = directeurDepuis;
		this.nomDirecteur = nomDirecteur;
	}
	public String getNomDirecteur() {
		return nomDirecteur;
	}
	public void setNomDirecteur(String nomDirecteur) {
		this.nomDirecteur = nomDirecteur;
	}
	public String getTelephoneMobile() {
		return telephoneMobile;
	}
	public void setTelephoneMobile(String telephoneMobile) {
		this.telephoneMobile = telephoneMobile;
	}
	
	public LocalDate getDirecteurDepuis() {
		return directeurDepuis;
	}
	public void setDirecteurDepuis(LocalDate directeurDepuis) {
		this.directeurDepuis = directeurDepuis;
	}
	@Override
	public String toString() {
		return super.toString()+"Directeur [telephoneMobile=" + telephoneMobile + ", directeurDepuis=" + directeurDepuis
				+ ", nomDirecteur=" + nomDirecteur + "]";
	}
	
	 

}
