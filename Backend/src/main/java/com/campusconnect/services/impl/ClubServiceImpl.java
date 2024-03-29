package com.campusconnect.services.impl;


import com.campusconnect.dto.ClubDto;
import com.campusconnect.entities.Club;
import com.campusconnect.repositories.ClubRepo;
import com.campusconnect.services.ClubService;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class ClubServiceImpl implements ClubService {

    @Autowired
    private ClubRepo clubRepo;

    @Autowired
    @Qualifier("modelMapper")
    private ModelMapper model;

    @Override
    public ClubDto createClub(ClubDto clubDto) {
        Club club = this.model.map(clubDto,Club.class);
        Club club1 = this.clubRepo.save(club);
        return this.model.map(club1,ClubDto.class);
    }

    @Override
    public ClubDto updateClub(ClubDto clubDto) {
        return null;
    }

    @Override
    public Club getClubById(Long clubId) {
        return clubRepo.findById(clubId).orElseThrow();
    }

    @Override
    public ClubDto getClubByName(String name) {
        return null;
    }

    @Override
    public List<ClubDto> getClubByDept(String dept) {
        return null;
    }

    @Override
    public List<Club> getAllClub() {
        return clubRepo.getAllClub();
    }


}
