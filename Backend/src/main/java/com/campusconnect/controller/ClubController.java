package com.campusconnect.controller;


import com.campusconnect.dto.AdminDto;
import com.campusconnect.dto.ClubDto;
import com.campusconnect.dto.StudentDto;
import com.campusconnect.entities.Admin;
import com.campusconnect.entities.Club;
import com.campusconnect.repositories.AdminRepo;
import com.campusconnect.repositories.ClubRepo;
import com.campusconnect.services.AdminService;
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

    @Autowired
    private AdminService adminService;

    @Autowired
    private AdminRepo adminRepo;

    @Autowired
    private ClubRepo clubRepo;

    @PostMapping("/register")
    private ResponseEntity<ClubDto> createClub(@RequestBody ClubDto clubDto)
    {
        System.out.println(clubDto.getClubEmail());
        Admin admin = new Admin();
        admin.setClubEmail(clubDto.getClubEmail());
        admin.setClubStatus("pending");
        adminRepo.save(admin);
        ClubDto clubDto1 = clubService.createClub(clubDto);
        return new ResponseEntity<ClubDto>(clubDto1, HttpStatus.CREATED);
    }


    @GetMapping("/AllClub")
    private ResponseEntity<List<ClubDto>> getAllCLub()
    {
        List<ClubDto> allClubs = adminService.getClubEmails().stream()
                .filter(admin -> admin.getClubStatus().equals("accepted"))
                .map(admin -> modelMapper.map(clubRepo.findClubByClubEmail(admin.getClubEmail()),ClubDto.class  ))
                .collect(Collectors.toList());

        return new ResponseEntity<List<ClubDto>>(allClubs,HttpStatus.OK);
    }


    @GetMapping("/{club_id}")
    private ResponseEntity<Club> getClubById(@PathVariable("club_id") Long club_id)
    {
        Club club = clubService.getClubById(club_id);

        return new ResponseEntity<Club>(club,HttpStatus.OK);
    }

    @GetMapping("/{club_email}/{club_password}")
    private ResponseEntity<?> loginClub(@PathVariable("club_email") String club_email,@PathVariable("club_password") String club_password)
    {
        ClubDto clubDto = clubService.loginClub(club_email,club_password);

        Admin admin = adminRepo.findAdminByClubEmail(clubDto.getClubEmail());

        if(admin.getClubStatus() == "pending")
        {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }

        return new ResponseEntity<Long>(clubDto.getClubId(),HttpStatus.ACCEPTED);
    }

    @GetMapping("/getclubtid/{email}/{password}")
    public ResponseEntity<?> getClubIdByEmail(@PathVariable("email") String email,@PathVariable("password") String password)
    {
        System.out.println(email);
        System.out.println(password);
        ClubDto clubDto = clubService.getClubIdByEmailAndPassword(email,password);
        System.out.println(clubDto.getClubId());

        return new ResponseEntity<ClubDto>(clubDto,HttpStatus.OK);
    }
}