package com.campusconnect.controller;

import com.campusconnect.dto.EventDto;
import com.campusconnect.services.EventService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/event")
public class EventController
{
    @Autowired
    private EventService eventService;


    @PostMapping("/")
    private ResponseEntity<?> createEvent(@RequestBody EventDto eventDto)
    {
        EventDto eventDto1 = eventService.createEvent(eventDto);
        return new ResponseEntity<>(eventDto1, HttpStatus.CREATED);
    }
}