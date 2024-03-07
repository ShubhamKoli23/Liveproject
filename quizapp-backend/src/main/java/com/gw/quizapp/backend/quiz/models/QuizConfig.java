package com.gw.quizapp.backend.quiz.models;

import com.gw.quizapp.backend.common.models.BaseEntity;
import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToOne;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;
import lombok.experimental.SuperBuilder;

@EqualsAndHashCode(callSuper = true)
@Data
@NoArgsConstructor
@AllArgsConstructor
@SuperBuilder
@Entity
public class QuizConfig extends BaseEntity {
    private String name;

    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "quiz_type_id", referencedColumnName = "id")
    TypeConfig quizType;
    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "level_type_id", referencedColumnName = "id")
    TypeConfig quizLevel;
    Integer duration;
    Integer totalQuestionCount;
}
