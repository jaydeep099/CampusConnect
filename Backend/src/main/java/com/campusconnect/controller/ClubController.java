package com.campusconnect.controller;


import com.campusconnect.dto.ClubDto;
import com.campusconnect.entities.Club;
import com.campusconnect.services.ClubService;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/api/club")
@CrossOrigin("*")
public class ClubController
{
    @Autowired
    private ClubService clubService;

    @Autowired
    @Qualifier("modelMapper")
    private ModelMapper modelMapper;



    @PostMapping("/register")
    private ResponseEntity<ClubDto> createClub(@RequestBody ClubDto clubDto)
    {
        ClubDto clubDto1 = clubService.createClub(clubDto);
        return new ResponseEntity<ClubDto>(clubDto1, HttpStatus.CREATED);
    }


    @GetMapping("/AllClub")
    private ResponseEntity<List<ClubDto>> getAllCLub()
    {
        List<ClubDto> allClubs = clubService.getAllClub()
                .stream()
                .map(club -> modelMapper.map(club,ClubDto.class))
                .collect(Collectors.toList());

        return new ResponseEntity<List<ClubDto>>(allClubs,HttpStatus.OK);
    }


    @GetMapping("/{club_id}")
    private ResponseEntity<Club> getClubById(@PathVariable("club_id") Long club_id)
    {
        Club club = clubService.getClubById(club_id);

        return new ResponseEntity<Club>(club,HttpStatus.OK);
    }

    @GetMapping("/{club_name}/{club_password}")
    private ResponseEntity<?> loginClub(@PathVariable("club_name") String club_name,@PathVariable("club_password") String club_password)
    {
        ClubDto clubDto = clubService.loginClub(club_name,club_password);

        return new ResponseEntity<Long>(clubDto.getClubId(),HttpStatus.ACCEPTED);
    }
}