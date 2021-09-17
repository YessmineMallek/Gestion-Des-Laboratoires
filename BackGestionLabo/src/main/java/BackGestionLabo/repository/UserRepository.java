package BackGestionLabo.repository;

import org.springframework.context.annotation.Primary;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.NoRepositoryBean;
import org.springframework.stereotype.Repository;

import BackGestionLabo.model.User;


@Repository
public interface UserRepository extends CrudRepository<User, String>  {

}
