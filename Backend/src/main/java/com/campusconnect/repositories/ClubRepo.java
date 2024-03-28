package com.campusconnect.repositories;

import com.campusconnect.entities.Club;
import com.campusconnect.entities.Event;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;
import java.util.Optional;

public interface ClubRepo extends JpaRepository<Club,Long> {
    @Query("SELECT c FROM Club c")
    public List<Club> getAllClub();

    public Club findClubByClubNameAndClubPassword(String username,String password);
}
