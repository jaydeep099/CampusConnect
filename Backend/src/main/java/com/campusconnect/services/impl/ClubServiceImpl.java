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

@Service
public class ClubServiceImpl implements ClubService {

    @Autowired
//    @Qualifier("clubRepo")
    private ClubRepo clubRepo;

    @Autowired
    @Qualifier("modelMapper")
    private ModelMapper model;

    @Override
    public ClubDto createClub(ClubDto clubDto) {

        Club club = model.map(clubDto,Club.class);
        Club club1 = clubRepo.save(club);

        return model.map(club1,ClubDto.class);
    }

    @Override
    public ClubDto updateClub(ClubDto clubDto) {
        return null;
    }

    @Override
    public ClubDto getClubById(Long clubId) {
        return null;
    }

    @Override
    public List<ClubDto> getClubByDept(String dept) {
        return null;
    }
}
