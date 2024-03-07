package com.campusconnect;

import com.campusconnect.entities.Club;
import com.campusconnect.entities.Event;
import com.campusconnect.entities.Student;
import com.campusconnect.repositories.ClubRepo;
import com.campusconnect.repositories.EventRepo;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import java.util.ArrayList;
import java.util.List;

@SpringBootApplication
public class CampusconnectApplication  {
	public static void main(String[] args) 	{
		SpringApplication.run(CampusconnectApplication.class, args);
	}
	@Bean
	public ModelMapper modelMapper(){
		return new ModelMapper();
	}
}
