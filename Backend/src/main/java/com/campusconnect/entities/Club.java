package com.campusconnect.entities;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Entity
@Setter
@Getter
public class Club
{
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

    @Column(name = "Logo_link")
    private String logo;

    @OneToMany(mappedBy = "club", cascade = CascadeType.ALL,fetch = FetchType.EAGER)
    private List<Event> eventList;
}
