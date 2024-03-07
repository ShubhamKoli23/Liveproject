package com.gw.quizapp.backend.quiz.dto;

public record QuizConfigRecord(
        String name,
        Integer duration,
        Integer totalQuestionCount,
        Long quizTypeId,
        Long quizLevelId
) {
}
