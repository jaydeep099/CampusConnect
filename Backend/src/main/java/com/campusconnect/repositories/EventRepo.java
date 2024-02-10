package com.campusconnect.repositories;

import com.campusconnect.entities.Event;
import org.springframework.data.jpa.repository.JpaRepository;

public interface EventRepo extends JpaRepository<Event,Long>
{

}
