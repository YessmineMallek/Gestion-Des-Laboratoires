package BackGestionLabo.services;

import java.util.Collection;
import java.util.Iterator;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;
import java.util.stream.StreamSupport;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import BackGestionLabo.model.*;
import BackGestionLabo.repository.DirecteurRepository;
import lombok.Data;

@Data
@Service
public class DirecteurService extends UserService {

	@Autowired
	private DirecteurRepository directeurRep;
	
	@Autowired
	private LaboratoireService labServ;
	
	
	//pour crypter le mot de passe
	private PasswordEncoder passwordEncoder;

	
	
	
	public DirecteurService() {
			this.passwordEncoder = new BCryptPasswordEncoder();}

	
	public List<Directeur> lesDirecteurs()
	{
		
		return  StreamSupport.stream(this.directeurRep.findAll().spliterator(), false)
								.collect(Collectors.toList());
	}
	public Directeur addDirecteur(Directeur d)
	{
		
		if(d.getPassword()!=null)
		{
			String encodedPassword=this.passwordEncoder.encode(d.getPassword());
			d.setPassword(encodedPassword);

		}
		d.setGrade("directeur");
		return directeurRep.save(d);
	}
	
	public Laboratoire getLaboByDirecteur(int id)
	{
		List<Laboratoire>lesLabo=labServ.getAllLabo();
		for(Laboratoire lab : lesLabo)
		{
			if (lab.getDirecteurCin().getId()==id)
			{
				System.out.println(lab);
				return lab;
			
			}
		}
		return null;
	}
	
	public Directeur updateDirecteur(Directeur direteurToUpdate,int id)
	{
		List<Directeur> lesDirecteur=lesDirecteurs();
		for(Directeur user:lesDirecteur)
		{
			if(user.getId()==id)
			{

				user.setCin(direteurToUpdate.getCin());
				user.setEmail(direteurToUpdate.getEmail());
				user.setGrade("directeur");
				user.setNomDirecteur(direteurToUpdate.getNomDirecteur());
				user.setDirecteurDepuis(direteurToUpdate.getDirecteurDepuis());
				user.setTelephoneMobile(direteurToUpdate.getTelephoneMobile());
				if(direteurToUpdate.getPassword()!=null)
				{
					String encodedPassword=this.passwordEncoder.encode(direteurToUpdate.getPassword());
					user.setPassword(encodedPassword);
				}
				
				directeurRep.save(user);
				return user;
				
			}
		}
		return null;
		
	}
	
	
	
}
