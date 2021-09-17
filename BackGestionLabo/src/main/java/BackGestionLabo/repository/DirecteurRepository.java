package BackGestionLabo.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import BackGestionLabo.model.Directeur;

@Repository
public interface DirecteurRepository extends CrudRepository<Directeur, String>{

}
