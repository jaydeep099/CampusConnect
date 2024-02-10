package com.campusconnect.repositories;

import com.campusconnect.entities.Club;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ClubRepo extends JpaRepository<Club,Long> {
}
