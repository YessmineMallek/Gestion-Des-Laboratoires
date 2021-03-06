package BackGestionLabo.model;


import java.time.LocalDate;
import java.util.Objects;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.sun.istack.NotNull;

import BackGestionLabo.model.Directeur;
import lombok.Data;


@Entity
@Table(name = "laboratoire")


public class Laboratoire {
	
	@Id
	@Column(name="code" ,length = 64)
	private String code;
	
	@Column(name="type")
	private String type;
	
	@Column(name="denomination")
	private String denomination;
	
	@Column(name="nomCompletEnArabe")
	private String nomCompletEnArabe;
	
	
	@Column(name="nomCompletEnAnglais")
	private String nomCompletEnAnglais;
	
	@Column(name="acronyme")
	private String acronyme;

	@Column(name="dateCreation")
    private LocalDate dateCreation ;
	
	
	@Column(name="universite")
	private String universite; 
	
	@Column(name="institution")
	private String institution;
	
	@Column(name="domaine")
	private String domaine; 
	
	@Column(name="discipline")
	private String discipline;
	
	@Column(name="specialite")
	private String specialite; 
	
	@Column(name="siteWeb")
	private String siteWeb;
	
	
	@Column(name="adresseOfficielle")
	private String adresseOfficielle;
	
	@Column(name="telephone")
	private String telephone;
	
	@Column(name="fax")
	private String fax;
	@OneToOne( cascade = {CascadeType.PERSIST, CascadeType.MERGE, CascadeType.REFRESH})

	private Directeur directeurCin;
	
	

	public Laboratoire() {
		super();
	}
	public Laboratoire(String code) {
		super();
		this.code = code;
	}
	public Directeur getDirecteurCin() {
		return directeurCin;
	}
	public void setDirecteurCin(Directeur directeurCin) {
		this.directeurCin = directeurCin;
	}
	public String getCode() {
		return code;
	}
	public void setCode(String code) {
		this.code = code;
	}
	public String getType() {
		return type;
	}
	public void setType(String type) {
		this.type = type;
	}
	public String getDenomination() {
		return denomination;
	}
	public void setDenomination(String denomination) {
		this.denomination = denomination;
	}
	public String getNomCompletEnArabe() {
		return nomCompletEnArabe;
	}
	public void setNomCompletEnArabe(String nomCompletEnArabe) {
		this.nomCompletEnArabe = nomCompletEnArabe;
	}
	

	
	
	public String getNomCompletEnAnglais() {
		return nomCompletEnAnglais;
	}
	public void setNomCompletEnAnglais(String nomCompletEnAnglais) {
		this.nomCompletEnAnglais = nomCompletEnAnglais;
	}
	public String getAcronyme() {
		return acronyme;
	}
	public void setAcronyme(String acronyme) {
		this.acronyme = acronyme;
	}
	public LocalDate getDateCreation() {
		return dateCreation;
	}
	public void setDateCreation(LocalDate dateCreation) {
		this.dateCreation = dateCreation;
	}
	public String getUniversite() {
		return universite;
	}
	public void setUniversite(String universite) {
		this.universite = universite;
	}
	public String getInstitution() {
		return institution;
	}
	public void setInstitution(String institution) {
		this.institution = institution;
	}
	public String getDomaine() {
		return domaine;
	}
	public void setDomaine(String domaine) {
		this.domaine = domaine;
	}
	
	
	public String getDiscipline() {
		return discipline;
	}
	public void setDiscipline(String discipline) {
		this.discipline = discipline;
	}
	public String getSiteWeb() {
		return siteWeb;
	}
	public void setSiteWeb(String siteWeb) {
		this.siteWeb = siteWeb;
	}
	public String getAdresseOfficielle() {
		return adresseOfficielle;
	}
	public void setAdresseOfficielle(String adresseOfficielle) {
		this.adresseOfficielle = adresseOfficielle;
	}
	public String getTelephone() {
		return telephone;
	}
	public void setTelephone(String telephone) {
		this.telephone = telephone;
	}
	public String getSpecialite() {
		return specialite;
	}
	public void setSpecialite(String specialite) {
		this.specialite = specialite;
	}
	
	public String getFax() {
		return fax;
	}
	public void setFax(String fax) {
		this.fax = fax;
	}
	@Override
	public String toString() {
		return "Laboratoire [code=" + code + ", type=" + type + ", denomination=" + denomination
				+ ", nomCompletEnArabe=" + nomCompletEnArabe + ", NomCompletEnAnglais=" + nomCompletEnAnglais
				+ ", \n acronyme=" + acronyme + ", dateCreation=" + dateCreation + ", universite=" + universite
				+ ",\n institution=" + institution + ", domaine=" + domaine + ", discipline=" + discipline
				+ ", specialite=" + specialite + ", siteWeb=" + siteWeb + ", adresseOfficielle=" + adresseOfficielle
				+ ", telephone=" + telephone + ", fax=" + fax + ", directeurCin=" + directeurCin + "]";
	}
	
	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		Laboratoire other = (Laboratoire) obj;
		return Objects.equals(code, other.code);
	}
	
	

	
	
	
	
	

	


}
