package com.gw.quizapp.backend.quiz.models;

import com.gw.quizapp.backend.common.models.BaseEntity;
import jakarta.persistence.Entity;
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
public class TypeConfig extends BaseEntity {

    private String name;
    private String details;
    private String category;
    private String subCategory;
    private String info1;
    private String info2;
}
