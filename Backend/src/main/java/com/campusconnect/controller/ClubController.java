package com.campusconnect.controller;


import com.campusconnect.dto.ClubDto;
import com.campusconnect.services.ClubService;
import com.campusconnect.services.impl.ClubServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/club")
public class ClubController
{
    @Autowired
    private ClubService clubService;

    @PostMapping("/")
    private ResponseEntity<?> createClub(@RequestBody ClubDto clubDto)
    {
        ClubDto clubDto1 = clubService.createClub(clubDto);
        return new ResponseEntity<>(clubDto1, HttpStatus.CREATED);
    }
}