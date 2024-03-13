package com.campusconnect.controller;

import com.campusconnect.dto.EventCardDto;
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
@CrossOrigin(origins = "http://localhost:5173")
public class EventController
{
    @Autowired
    private EventService eventService;


    @Autowired
    private ModelMapper modelMapper;

    @PostMapping("/{clubId}")
    public ResponseEntity<?> createEvent(@RequestBody EventDto eventDto, @PathVariable Long clubId)
    {
        EventDto eventDto1 = this.eventService.createEvent(eventDto, clubId);
        return new ResponseEntity<>(eventDto1, HttpStatus.CREATED);
    }


    @GetMapping("/club/{clubId}")
    public ResponseEntity<List<EventDto>> getEventbyClub(@PathVariable Long clubId)
    {
        List<EventDto> allEventByClub = eventService.getAllEventsByClub(clubId)
                .stream()
                .map(event -> modelMapper.map(event,EventDto.class))
                .collect(Collectors.toList());

        return new ResponseEntity<List<EventDto>>(allEventByClub,HttpStatus.OK);
    }

    @GetMapping("/geteventbwdate/{d1}/{d2}")
    public List<Event> getEventsBWDate(@PathVariable("d1") String date1,@PathVariable("d2") String date2)
    {
        Date d1 = convertToDateManually(date1);
        Date d2 = convertToDateManually(date2);
        System.out.println("d1: "+d1);
        System.out.println("d2: "+d2);

        return eventService.getEventsBWDate(d1,d2);
    }

    private Date convertToDateManually(String dateString) {
        try {
            SimpleDateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd");
            return dateFormat.parse(dateString);
        } catch (ParseException e) {
            System.out.println(e);
            return null;
        }
    }

    @DeleteMapping("/event/{eventId}")
    public void deleteEvent(@PathVariable("eventId") Long eventId)
    {
        this.eventService.deleteEvent(eventId);
    }

    @GetMapping("/allEvents")
    public ResponseEntity<List<EventCardDto>> getAllEvetn()
    {
        List<EventCardDto> allEvents = eventService.getAllEvent()
                .stream()
                .map(event -> modelMapper.map(event,EventCardDto.class))
                .collect(Collectors.toList());

        return new ResponseEntity<List<EventCardDto>>(allEvents,HttpStatus.OK);
    }

    @PutMapping("event/{eventId}")
    public ResponseEntity<?> updateEvent (@RequestBody EventDto eventDto , @PathVariable Long eventId){
        EventDto updatedEvent = this.eventService.updateEvent(eventDto,eventId);
        return new ResponseEntity<>(updatedEvent , HttpStatus.OK);
    }

    @GetMapping("/upcomingEvents")
    public ResponseEntity<List<EventCardDto>> getUpcomingEvents()
    {
        List<EventCardDto> upcomingEvents = eventService.getUpcomingEvent()
                .stream()
                .map(event -> modelMapper.map(event,EventCardDto.class))
                .collect(Collectors.toList());

        return new ResponseEntity<List<EventCardDto>>(upcomingEvents,HttpStatus.OK);
    }

    private Date convertToDate(String dateString) {
        try {
            SimpleDateFormat dateFormat = new SimpleDateFormat("dd-MM-yyyy");
            return dateFormat.parse(dateString);
        } catch (ParseException e) {
            e.printStackTrace();
            return null;
        }
    }
}