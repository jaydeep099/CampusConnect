package com.campusconnect.dto;


import com.campusconnect.entities.Event;
import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Setter
@Getter
public class ClubDto
{
    private Long club_id;

    private String club_name;

    private String mentor;

    private String club_username;

    private String club_password;

    private String description;

    private String dept;

    private String logo;

    private List<Event> eventList;
}
