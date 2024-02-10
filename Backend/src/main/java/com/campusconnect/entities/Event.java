package com.campusconnect.entities;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;
import org.springframework.format.annotation.DateTimeFormat;

import java.sql.Time;
import java.util.Date;
import java.util.List;

@Entity
@Setter
@Getter
public class Event
{
    @Id
    @Column(name = "Event_Id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long eventId;

    @Column(name = "Event_Name")
    private String eventName;

    @Column(name = "Event_Date")
    private Date eventDate;

    @Column(name = "Event_Time")
    @DateTimeFormat(pattern = "dd-MM-yyyy")
    private Time eventTime;

    @Column(name = "Event_Venue")
    private String eventVenue;

    @Column(name = "Event_Description")
    private String description;

    @Column(name = "Brochure")
    private String brochure;

    @ManyToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "Club_FK")
    private Club club;

    @ManyToMany(cascade = CascadeType.ALL)
    private List<Student> Student;

}

