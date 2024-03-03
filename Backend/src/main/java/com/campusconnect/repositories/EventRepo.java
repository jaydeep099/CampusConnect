package com.campusconnect.repositories;

import com.campusconnect.entities.Club;
import com.campusconnect.entities.Event;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.web.bind.annotation.PathVariable;

import java.util.Date;
import java.util.List;

public interface EventRepo extends JpaRepository<Event,Long>
{
    public List<Event> findEventByClub(Club club);

    @Query("select e FROM Event e")
    public List<Event> getAllEvent();

    @Query("select e FROM Event e WHERE e.eventDate>= :d1 and e.eventDate<= :d2")
    public List<Event> getEventsBWDate(@Param("d1") Date date1,@Param("d2") Date date2);
}
