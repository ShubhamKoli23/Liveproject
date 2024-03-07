package com.gw.quizapp.backend.login.models;

import com.gw.quizapp.backend.common.models.BaseEntity;
import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.ManyToOne;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;
import lombok.experimental.SuperBuilder;

import java.time.LocalDateTime;

@EqualsAndHashCode(callSuper = true)
@Data
@NoArgsConstructor
@AllArgsConstructor
@SuperBuilder
@Entity
public class LoginSession extends BaseEntity {

    @ManyToOne(cascade = CascadeType.ALL)
    private User user;
    private LocalDateTime loginDateTime;
}
