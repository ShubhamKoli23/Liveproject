package com.gw.quizapp.backend.quiz.models;

import java.util.List;

public class Quiz {
    Long id;
    String name;
    private QuizConfig quizConfig;
    private List<Question> questions;
}
