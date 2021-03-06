package BackGestionLabo.services;

import java.util.Iterator;
import java.util.List;
import java.util.stream.Collectors;
import java.util.stream.StreamSupport;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Primary;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.fasterxml.jackson.annotation.JsonSubTypes.*;
import com.fasterxml.jackson.annotation.JsonTypeInfo;

import BackGestionLabo.exception.ApiRequestException;
import BackGestionLabo.model.*;
import BackGestionLabo.repository.*;

@Service
@Primary
public class UserService {

	@Autowired
	private UserRepository userRep;
	
	
	private PasswordEncoder passwordEncoder=new BCryptPasswordEncoder();
	
	//retourne tous les utilisateus
	public List<User> getAll()
	{
		 List<User> Users = StreamSupport.stream(userRep.findAll().spliterator(), false)
			      .collect(Collectors.toList());
		return Users;
	}
	//retourner un utilisateur selon leur email
		public List<User> findByEmail(String email)
		{			
			List<User> usersByEmail=getAll().stream()
					.filter(u-> u.getEmail().trim().equals(email.trim()))
					.collect(Collectors.toList());
			 return usersByEmail;
		}
		

	

	
	//retourner un utilisateur selon leur id
	public List<User> findById(int id)
	{
		List<User> usersById=getAll().stream()
				.filter(u-> u.getId()==id)
				.collect(Collectors.toList());	
		 return usersById;
	}
	
	
	
	//retourner les users selon leur grade
	public List<User> findByGrade(String grade)
	{
		List<User> usersByGrade=getAll().stream()
				.filter(u-> u.getGrade().equals(grade))
				.collect(Collectors.toList());

		 return usersByGrade;
	}
	
	
	//supprimer utilisateur selon leur ID
	public void deleteUtilisateur (int id)
	{
		
		User u=null;
		for(User user:findById(id))
			u=user;
			
		 userRep.delete(u);
	}
	
	//verifier si le mot de passe crypter(celle enregistrer dans la BD) et celle saisie sont identique w non
	public boolean matches(String email,String LogInPassword )
	{
		User u=null;
		List<User>users=this.findByEmail(email);
		for(User user:users)
		{	u=user; }
		
		if(u==null)
		{
			throw new ApiRequestException("email introuvabre");
		}
		else
		{
			boolean isMatchPassword=passwordEncoder.matches(LogInPassword, u.getPassword());
			System.out.println(isMatchPassword);
			return isMatchPassword;
		}
		
		
	}
	//pour mettre a jour le mot de passe
	public  User modifierMotDePasse(int id,String ancienPassword,String newPassword)
	{
		User u=null;
		for(User user:findById(id))
		{	u=user;}
		//verifie si l'ancien mot de passe correspond a celle saisie 
		String email=u.getEmail();
		if(u!=null && this.matches(email,ancienPassword)==true)
			
		{
			String encodedPassword=this.passwordEncoder.encode(newPassword);
			u.setPassword(encodedPassword);
			 return userRep.save(u);
		}
		return null;
	
	}
		
	}
	

