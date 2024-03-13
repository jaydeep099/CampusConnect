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

import java.util.List;

@Entity
@Setter
@Getter
@RequiredArgsConstructor
public class Club {
    @Id
    @Column(name = "Club_Id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long club_id;

    @Column(name = "Club_Name")
    private String club_name;

    @Column(name = "Mentor_Name")
    private String mentor;

    @Column(name = "Username")
    private String club_username;

    @Column(name = "Password")
    private String club_password;

    @Column(name = "Description")
    private String description;

    @Column(name = "Department")
    private String dept;

    @Column(name = "Logo_link", length = Integer.MAX_VALUE)
    private String logo;

    @OneToMany(mappedBy = "club", fetch = FetchType.LAZY)
//    @JsonIgnore
    private List<Event> eventList;
}
