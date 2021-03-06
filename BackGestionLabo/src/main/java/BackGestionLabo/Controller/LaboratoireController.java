package BackGestionLabo.Controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.http.StreamingHttpOutputMessage.Body;
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
import BackGestionLabo.exception.ApiRequestException;
import BackGestionLabo.model.*;
@Api( description="API pour les opérations CRUD sur les Laboratoires.")
@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/laboratoire")
public class LaboratoireController {
	
	
	@Autowired
	private LaboratoireService labServ;
	
	//Retourner tous les laboratoires

	@GetMapping
	public List<Laboratoire> getAllLaboratoires(){
		return labServ.getAllLabo();
	}
	
	
	@GetMapping("/{code}")
	public Laboratoire getLabo(@PathVariable String code){
		if(!getAllLaboratoires().contains(new Laboratoire(code)))//si la laboratoire n'existe pas
		{
			throw new ApiRequestException("Laboratoire n'existe pas");
		}
		return this.labServ.fingByCode(code);


	
	}
	
	@PostMapping("/add")
	public Laboratoire createLaboratoire(@RequestBody Laboratoire lab)
	{
		if(getAllLaboratoires().contains(lab))//si la laboratoire Existe Deja
		{
			throw new ApiRequestException("La laboratoire Existe Deja");
		}		
		 return labServ.addLabo(lab);

	}

	
	 @PutMapping("/{code}")
	 public Laboratoire updateLaboratoire(@RequestBody Laboratoire labToChange ,@PathVariable String code) {

		if(!getAllLaboratoires().contains(labToChange))//si la laboratoire n'existe pas
		{
			throw new ApiRequestException("Laboratoire n'existe pas");
		}
		return labServ.update(labToChange,code); 
		
	 }
	 
	@DeleteMapping("/{code}")
	public void deleteLaboratoire(@PathVariable String code)
	{

		if(!getAllLaboratoires().contains(new Laboratoire(code)))//si la laboratoire n'existe pas
		{
			throw new ApiRequestException("Laboratoire n'existe pas");
		}
		labServ.delete(code);
	}

}
