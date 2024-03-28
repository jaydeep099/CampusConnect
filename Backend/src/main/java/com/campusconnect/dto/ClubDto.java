package com.campusconnect.dto;


import com.campusconnect.entities.Event;
import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Setter
@Getter
public class ClubDto
{
    private Long clubId;

    private String clubName;

    private String mentor;

    private String clubEmail;

    private String clubPassword;

    private String description;

    private String president;

    private String dept;

    private String logo;

    private List<Event> eventList;
}
