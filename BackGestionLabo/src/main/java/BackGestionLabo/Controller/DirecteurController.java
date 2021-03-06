package BackGestionLabo.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import BackGestionLabo.services.*;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import BackGestionLabo.exception.ApiRequestException;
import BackGestionLabo.model.*;
@Api( description="API pour les opérations CRUD sur les Directeurs.")


@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/directeurs")
public class DirecteurController extends UserController{
	
	@Autowired
	private DirecteurService directeurServ;

	//Ajout du directeur 
	@ApiOperation(value="Ajouter un directeur")
	@PostMapping
	public Directeur addDirecteur(@RequestBody Directeur direcToAdd)
	{
		if(directeurServ.lesDirecteurs().contains(direcToAdd))		//si le directeur existe deja
		{
			throw new ApiRequestException("Directeur existe deja");
		}
		direcToAdd.setGrade("directeur");
		return  directeurServ.addDirecteur(direcToAdd);
			
	}
	
	//Recuperer un laboratoire selon id de son directeur 
	@ApiOperation(value="recuperer le laboratoire selon ID son directeur")
	@GetMapping("/laboDuDirecteur/{id}")
	public Laboratoire getLaboratoire(@PathVariable int id)
	{
		return this.directeurServ.getLaboByDirecteur(id);
	}
	
	//Modifier un Directeur
	@ApiOperation(value="Modifier un directeur")
	@PutMapping("/{id}")
	public Directeur updateDirecteur(@RequestBody Directeur directeurToUpdate,@PathVariable int id)
	{
		if(!directeurServ.lesDirecteurs().contains(directeurToUpdate))		//si directeur n'existe pas
		{
			throw new ApiRequestException("Directeur n'existe pas");
		}
		return this.directeurServ.updateDirecteur(directeurToUpdate,id);
	}
	
	
	
}
