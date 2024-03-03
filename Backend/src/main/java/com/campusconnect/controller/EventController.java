package com.campusconnect.controller;

import com.campusconnect.dto.EventDto;
import com.campusconnect.entities.Event;
import com.campusconnect.services.EventService;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.xml.crypto.Data;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;
import java.util.stream.Collector;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/api/event")
public class EventController
{
    @Autowired
    private EventService eventService;


    @Autowired
    private ModelMapper modelMapper;

    @PostMapping("/{clubId}")
    private ResponseEntity<?> createEvent(@RequestBody EventDto eventDto, @PathVariable("clubId") Long clubId)
    {
        EventDto eventDto1 = eventService.createEvent(eventDto, clubId);
        return new ResponseEntity<>(eventDto1, HttpStatus.CREATED);
    }

    @GetMapping("/club/{clubId}")
    private ResponseEntity<List<EventDto>> geteventbyClub(@PathVariable("clubId") Long clubId)
    {
        List<EventDto> allEventByClub = eventService.getAllEventsByClub(clubId)
                .stream()
                .map(event -> modelMapper.map(event,EventDto.class))
                .collect(Collectors.toList());

        return new ResponseEntity<List<EventDto>>(allEventByClub,HttpStatus.OK);
    }

    @GetMapping("/geteventbwdate/{d1}/{d2}")
    private List<Event> geteventsBydate(@PathVariable("d1") String date1,@PathVariable("d2") String date2)
    {
        Date d1 = convertToDate(date1);
        Date d2 = convertToDate(date2);
        List<Event> eventsBWDate = eventService.getEventsBWDate(d1,d2);

        return eventsBWDate;
    }

    @DeleteMapping("/delete/{eventId}")
    private void deleteEvent(@PathVariable("eventId") Long eventId)
    {
        eventService.deleteEvent(eventId);
//        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }

    @GetMapping("/allEvents")
    private List<Event> getAllEvetn()
    {
        List<Event> allEvents = eventService.getAllEvent();

        return allEvents;
    }

    private Date convertToDate(String dateString) {
        try {
            SimpleDateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd");
            return dateFormat.parse(dateString);
        } catch (ParseException e) {
            // Handle parse exception
            e.printStackTrace();
            return null;
        }
    }
}