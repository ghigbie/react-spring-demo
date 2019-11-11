package com.higbie.reactspringdemo.student;

public class Student {

    private final UUID studentId;
    private final String firstName;
    private final String lastName;
    private final String email;
    private final Gender gender;

    enum Gender {
        MALE, FEMALE
    }

}
