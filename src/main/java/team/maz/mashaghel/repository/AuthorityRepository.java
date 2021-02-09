package team.maz.mashaghel.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import team.maz.mashaghel.domain.Authority;

/**
 * Spring Data JPA repository for the {@link Authority} entity.
 */
public interface AuthorityRepository extends JpaRepository<Authority, String> {}
