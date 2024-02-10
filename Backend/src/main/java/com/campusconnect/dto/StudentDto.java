package com.campusconnect.dto;

import lombok.Getter;
import lombok.Setter;
import com.campusconnect.entities.Event;
import java.util.List;

@Setter
@Getter
public class StudentDto {
    private String Name;

    private String Email;

    private String Username;

    private String Sem;

    private String Dept;

    private List<Event> Event;
}
