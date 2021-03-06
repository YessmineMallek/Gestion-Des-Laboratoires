package BackGestionLabo.services;

import java.util.Iterator;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;
import java.util.stream.StreamSupport;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import BackGestionLabo.model.*;
import BackGestionLabo.repository.*;
import lombok.Data;

@Data
@Service
public class LaboratoireService {
	@Autowired
	private LaboratoireRepository laboRep;
	
	
	
	//afficher tous les laboratoires
	public List<Laboratoire> getAllLabo()
	{
		return  StreamSupport.stream(laboRep.findAll().spliterator(), false)
			      .collect(Collectors.toList());
		
	}
	
	//ajouter une laboratoire a BD
	
	public Laboratoire addLabo (Laboratoire labToAdd)
	{
		return laboRep.save(labToAdd);
	}
		
	
	
	//mise a jour
	  public Laboratoire update (Laboratoire labDonné , String code) {
	    
		  List<Laboratoire> lesLabs=this.getAllLabo(); 
		for(Laboratoire lab :lesLabs)
		{		if(lab.getCode().equals(code))
				  {
				  
							  lab.setType(labDonné.getType());
							  
							  lab.setDenomination(labDonné.getDenomination()) ;
							  lab.setNomCompletEnArabe(labDonné.getNomCompletEnArabe());
							  lab.setNomCompletEnAnglais(labDonné.getNomCompletEnAnglais());
							  lab.setAcronyme(labDonné.getAcronyme());
							  lab.setDateCreation(labDonné.getDateCreation());
							  lab.setUniversite(labDonné.getUniversite());
							  lab.setInstitution(labDonné.getInstitution());
							  lab.setDomaine(labDonné.getDomaine());
							  lab.setDiscipline(labDonné.getDiscipline());
							  lab.setSpecialite(labDonné.getSpecialite());
							  lab.setSiteWeb(labDonné.getSiteWeb()); 
							  lab.setTelephone(labDonné.getTelephone());
							  lab.setFax(labDonné.getFax());
							  lab.setAdresseOfficielle(labDonné.getAdresseOfficielle()); 
							  lab.setDirecteurCin(labDonné.getDirecteurCin());
							  return  this.laboRep.save(lab);
				  } 
		}
	  
	  return null;
 }	 
	
	//supprimer la laboratoire
	public void delete(String code)
	{
		laboRep.deleteById(code);
	}
	
	
	//Retourner selon le code le Laboratoire correspondant
	public  Laboratoire fingByCode(String code)
	{
		Iterator<Laboratoire> labIt=this.getAllLabo().iterator();
		while (labIt.hasNext())
		{
			Laboratoire l=labIt.next();
			if(l.getCode().equals(code))
				return l;
		}
	return null;
	}
	
	
}
