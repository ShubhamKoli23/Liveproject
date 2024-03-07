package com.gw.quizapp.backend.quiz.repository;

import com.gw.quizapp.backend.quiz.models.TypeConfig;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import java.util.List;

@RepositoryRestResource(collectionResourceRel = "type-configs", path = "type-configs")
public interface TypeConfigRepository extends CrudRepository<TypeConfig, Long> {
    List<TypeConfig> findByName(@Param("name") String name);
}
