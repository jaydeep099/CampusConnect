package com.campusconnect.entities;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Entity
@Setter
@Getter
public class Student {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "Student_Id")
    private Long Id;

    @Column(name = "Student_name")
    private String Name;

    @Column(name = "Student_Email")
    private String Email;

    @Column(name = "Student_Username")
    private String Username;

    @Column(name = "Student_Password")
    private String Password;

    @Column(name = "Semester")
    private String Sem;

    @Column(name = "Department")
    private String Dept;

    @ManyToMany(cascade = CascadeType.ALL)
    private List<Event> Event;
}
