package com.gw.quizapp.backend.quiz.repository;

import com.gw.quizapp.backend.quiz.models.QuizConfig;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource(collectionResourceRel = "quiz-configs", path = "quiz-configs")
public interface QuizConfigRepository extends CrudRepository<QuizConfig, Long> {
}
