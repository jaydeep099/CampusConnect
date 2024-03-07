package com.campusconnect.services.impl;

import com.campusconnect.dto.EventDto;
import com.campusconnect.entities.Club;
import com.campusconnect.entities.Event;
import com.campusconnect.repositories.ClubRepo;
import com.campusconnect.repositories.EventRepo;
import com.campusconnect.services.EventService;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.List;
import java.util.Optional;

@Service
public class EventServiceImpl implements EventService {

    @Autowired
    private EventRepo eventRepo;

    @Autowired
    private ClubRepo clubRepo;

    @Autowired
    @Qualifier("modelMapper")
    private ModelMapper model;

    @Override
    public EventDto createEvent(EventDto eventDto,Long clubId)
    {
        Club club = this.clubRepo.findById(clubId).orElseThrow();
        Event event = model.map(eventDto,Event.class);
        event.setClub(club);
        Event event1 = this.eventRepo.save(event);
        return this.model.map(event1,EventDto.class);
    }

    @Override
    public EventDto updateEvent(EventDto eventDto) {
        return null;
    }

    @Override
    public void deleteEvent(Long eventId)
    {
        eventRepo.findById(eventId)
                .orElseThrow();

        eventRepo.deleteById(eventId);
    }

    @Override
    public List<Event> getAllEventsByClub(Long clubId) {
        return null;
    }

    @Override
    public List<Event> getEventsBWDate(Date date1, Date date2) {
        return eventRepo.getEventsBWDate(date1,date2);
    }

    @Override
    public List<Event> getAllEvent(){
        return eventRepo.getAllEvent();
    }
}
