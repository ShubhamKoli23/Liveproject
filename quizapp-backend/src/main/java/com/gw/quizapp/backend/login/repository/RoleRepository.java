package com.gw.quizapp.backend.login.repository;

import com.gw.quizapp.backend.login.models.ERole;
import com.gw.quizapp.backend.login.models.Role;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface RoleRepository extends JpaRepository<Role, Long> {
    Optional<Role> findByName(ERole name);
}
