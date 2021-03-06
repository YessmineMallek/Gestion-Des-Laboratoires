package BackGestionLabo.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;







import BackGestionLabo.services.*;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import BackGestionLabo.exception.ApiRequestException;
import BackGestionLabo.model.*;

@Api( description="API pour les opérations CRUD sur les Utilisateurs.")
@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/users")
public class UserController {
	
	@Autowired
	private UserService userServ;
	
	
	
	@GetMapping
	public List<User> findAll()
	{
		return this.userServ.getAll();
	}
	
	@GetMapping("/{id}") 
	  public List<User> findUserById(@PathVariable int id)
	  {
		
		return this.userServ.findById(id);
	  }
	

	//recuperer les Utilisateur selon un Grade donnée
	@GetMapping("/userByGrade/{grade}")
	public List<User> findUserByGrade(@PathVariable String grade)
	  {
		  return this.userServ.findByGrade(grade);
	  }

	
	//recuperer l'utilisateur selon son email (utilisation lors de l'authentification)
	@GetMapping("/userByEmail/{email}")
	public List<User> findUserByEmail(@PathVariable String email)
	{
		return this.userServ.findByEmail(email);
	}
	
	
	
	
	@DeleteMapping("/{id}")
	public void deleteUtilisateur (@PathVariable int id)
	{
		try 
		{
			this.userServ.deleteUtilisateur(id);
		}catch (Exception ex)
		{
			if (ex instanceof DataIntegrityViolationException)
				throw new ApiRequestException("cette Utilisateur est un directeur d'une laboratoire" );
			System.out.println(ex);
		}
	}
	
	
	/*pour verifier si le password saisie correspond a celle crypter(enregistrer dans BD)
	retourne -true :identique
	 			false:ne sont pas identique
	*/	
	@ApiOperation(value="Vérifier si le Password Saisie correspond a celle Crypter(enregistrer dans BD)")
	@GetMapping("/{email}/{password}")
	public boolean isMatch(@PathVariable String email,@PathVariable String password)
	{
		return userServ.matches(email, password);
	}
	/* Modifier le MotDePasse*/		
	@PutMapping("/modifierMotDePasse/{id}/{ancienPassword}")
	@ApiOperation(value="Modifier le mot de passe")

	public User modiferPassword(@PathVariable int id,@PathVariable String ancienPassword,@RequestBody String newpasswords)
	{
		return userServ.modifierMotDePasse(id, ancienPassword,newpasswords);
		
	}

}
