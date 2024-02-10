package com.campusconnect.services;


import com.campusconnect.dto.ClubDto;

import java.util.List;

public interface ClubService
{
    public ClubDto createClub(ClubDto clubDto);

    public ClubDto updateClub(ClubDto clubDto);

    public ClubDto getClubById(Long clubId);

    public List<ClubDto> getClubByDept(String dept);
}