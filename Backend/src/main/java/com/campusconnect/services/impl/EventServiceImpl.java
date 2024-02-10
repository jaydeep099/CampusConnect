package com.campusconnect.services.impl;

import com.campusconnect.dto.EventDto;
import com.campusconnect.entities.Event;
import com.campusconnect.repositories.EventRepo;
import com.campusconnect.services.EventService;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Service;

@Service
public class EventServiceImpl implements EventService {

    @Autowired
    private EventRepo eventRepo;

    @Autowired
    @Qualifier("modelMapper")
    private ModelMapper model;

    @Override
    public EventDto createEvent(EventDto eventDto)
    {
        Event event = model.map(eventDto,Event.class);
        Event event1 = eventRepo.save(event);

        return model.map(event1,EventDto.class);
    }

    @Override
    public EventDto updateEvent(EventDto eventDto) {
        return null;
    }

    @Override
    public EventDto deleteEvent(EventDto eventDto) {
        return null;
    }
}
