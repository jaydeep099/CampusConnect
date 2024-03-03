package com.campusconnect.services;

import com.campusconnect.dto.EventDto;
import com.campusconnect.entities.Event;

import java.util.Date;
import java.util.List;

public interface EventService
{
    public EventDto createEvent(EventDto eventDto, Long clubId);

    public EventDto updateEvent(EventDto eventDto);

    public EventDto deleteEvent(EventDto eventDto);
    
}
