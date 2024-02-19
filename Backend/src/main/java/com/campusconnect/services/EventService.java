package com.campusconnect.services;

import com.campusconnect.dto.EventDto;

public interface EventService
{
    public EventDto createEvent(EventDto eventDto);

    public EventDto updateEvent(EventDto eventDto);

    public EventDto deleteEvent(EventDto eventDto);


}
