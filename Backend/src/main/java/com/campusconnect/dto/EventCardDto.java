package com.campusconnect.dto;

import lombok.Getter;
import lombok.Setter;
import java.util.Date;

@Setter
@Getter
public class EventCardDto
{
    private Long eventId;

    private String eventName;

    private Date eventDate;

    private String brochure;
}
