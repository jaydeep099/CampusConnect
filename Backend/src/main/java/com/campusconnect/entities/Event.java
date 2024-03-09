package com.campusconnect.entities;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.RequiredArgsConstructor;
import lombok.Setter;
import org.springframework.format.annotation.DateTimeFormat;

import java.sql.Time;
import java.util.Date;
import java.util.List;

@Entity
@Setter
@Getter
@RequiredArgsConstructor
public class Event {
    @Id
    @Column(name = "Event_Id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long eventId;

    @Column(name = "Event_Name")
    private String eventName;

    @Column(name = "Event_Date")
    @DateTimeFormat(pattern = "yyyy-MM-dd")
    private Date eventDate;

    @Column(name = "Event_Time")
    @DateTimeFormat(pattern = "HH:mm:ss")
    private Time eventTime;

    @Column(name = "Event_Venue")
    private String eventVenue;

    @Column(name = "Event_Description")
    private String description;

    @Column(name = "Brochure")
    private String brochure;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "Club_FK")
    @JsonBackReference // Prevents infinite recursion in JSON serialization
    private Club club;

    @ManyToMany(cascade = CascadeType.ALL)
    @JsonIgnore// Manages the serialization of the Student list
    private List<Student> student;
}
