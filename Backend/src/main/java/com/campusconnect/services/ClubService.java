package com.campusconnect.services;


import com.campusconnect.dto.ClubDto;
import com.campusconnect.dto.StudentDto;
import com.campusconnect.entities.Club;
import com.campusconnect.entities.Event;

import java.util.List;

public interface ClubService
{

    public ClubDto createClub(ClubDto clubDto);

    public ClubDto updateClub(ClubDto clubDto,Long clubId);

    public ClubDto getClubById(Long clubId);

    public List<Club> getAllClub();

    public ClubDto loginClub(String username,String password);

    public ClubDto getClubIdByUsernameAndPassword(String username, String password);
}