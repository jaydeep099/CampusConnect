package com.campusconnect.controller;

import com.campusconnect.dto.EventDto;
import com.campusconnect.entities.Event;
import com.campusconnect.services.EventService;
import com.campusconnect.services.FileService;
import jakarta.servlet.http.HttpServletResponse;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.util.StreamUtils;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.io.InputStream;
import java.sql.Time;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;
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

    @Autowired
    private FileService fileService;

    @Value("${project.image}")
    private String path;

    @PostMapping("/createEvent/{clubId}")
    public ResponseEntity<?> createEvent(@RequestBody EventDto eventDto, @PathVariable Long clubId)
    {
        System.out.println("hii");
        EventDto eventDto1 = this.eventService.createEvent(eventDto, clubId);
        return new ResponseEntity<>(eventDto1, HttpStatus.CREATED);
    }


//    @PostMapping("/createEvent/{clubId}")
//    public ResponseEntity<?> createEvent(@RequestBody EventDto eventDto, @PathVariable Long clubId)
//    {
//        // Split the eventTime string into hours and minutes components
//        String[] timeComponents = eventDto.getEventTime().split(":");
//        int hours = Integer.parseInt(timeComponents[0]);
//        int minutes = Integer.parseInt(timeComponents[1]);
//
//        // Create a java.sql.Time object using the extracted components
//        Time eventTime = Time.valueOf(String.format("%02d:%02d:00", hours, minutes));
//
//        // Set the converted eventTime to the EventDto
//        eventDto.setEventTime(eventTime);
//
//        EventDto createdEvent = this.eventService.createEvent(eventDto, clubId);
//        return new ResponseEntity<>(createdEvent, HttpStatus.CREATED);
//    }

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
    public ResponseEntity<List<EventDto>> getAllEvetn()
    {
        List<EventDto> allEvents = eventService.getAllEvent()
                .stream()
                .map(event -> modelMapper.map(event,EventDto.class))
                .collect(Collectors.toList());

        return new ResponseEntity<List<EventDto>>(allEvents,HttpStatus.OK);
    }

    @PutMapping("event/{eventId}")
    public ResponseEntity<?> updateEvent (@RequestBody EventDto eventDto , @PathVariable Long eventId){
        EventDto updatedEvent = this.eventService.updateEvent(eventDto,eventId);
        return new ResponseEntity<>(updatedEvent , HttpStatus.OK);
    }

    @GetMapping("/upcomingEvents")
    public ResponseEntity<List<EventDto>> getUpcomingEvents()
    {
        List<EventDto> upcomingEvents = eventService.getUpcomingEvent()
                .stream()
                .map(event -> modelMapper.map(event,EventDto.class))
                .collect(Collectors.toList());

        return new ResponseEntity<List<EventDto>>(upcomingEvents,HttpStatus.OK);
    }

    @GetMapping("/{eventId}")
    public ResponseEntity<Event> getEventById(@PathVariable("eventId") Long eventId)
    {
        EventDto eventDto = eventService.getEventbyId(eventId);

        return new ResponseEntity<Event>(modelMapper.map(eventDto,Event.class),HttpStatus.OK);
    }

    @PostMapping("/image/upload/{eventId}")
    public ResponseEntity<EventDto>  uploadImage(
            @RequestParam("image") MultipartFile image,
            @PathVariable Long eventId
    ) throws IOException
    {
        EventDto eventDto = this.eventService.getEventbyId(eventId);
        String fileName =  this.fileService.uploadImage(path,image);
        eventDto.setBrochure(fileName);
        EventDto updatePost = this.eventService.updateEvent(eventDto,eventId);
        return  new ResponseEntity<EventDto>(updatePost,HttpStatus.OK);
    }

    @GetMapping(value = "/eventbroucher/{image}" , produces = MediaType.IMAGE_JPEG_VALUE)
    public void ShowImage(@PathVariable("image") String image,
                            HttpServletResponse response) throws IOException {
        InputStream resource = this.fileService.getResources(path,image);
        response.setContentType(MediaType.IMAGE_JPEG_VALUE);
        StreamUtils.copy(resource,response.getOutputStream());

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