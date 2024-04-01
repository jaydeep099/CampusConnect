package com.campusconnect.services;


import com.campusconnect.dto.ClubDto;
import com.campusconnect.dto.StudentDto;
import com.campusconnect.entities.Club;
import com.campusconnect.entities.Event;

import java.util.List;

public interface ClubService
{

    public ClubDto createClub(ClubDto clubDto);

    public ClubDto updateClub(ClubDto clubDto);

    public ClubDto getClubById(Long clubId);
    public ClubDto getClubByName(String name);

    public List<ClubDto> getClubByDept(String dept);

    public List<Club> getAllClub();

    public ClubDto loginClub(String username,String password);

    public ClubDto getClubIdByEmailAndPassword(String username, String password);
}