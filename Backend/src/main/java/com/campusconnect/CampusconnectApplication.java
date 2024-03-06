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
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

import java.util.ArrayList;
import java.util.List;

@SpringBootApplication
public class CampusconnectApplication  {

	@Autowired
	private ClubRepo clubRepo;

	@Autowired
	private EventRepo eventRepo;

	public static void main(String[] args) 	{
		SpringApplication.run(CampusconnectApplication.class, args);
	}

//	@Override
//	public void run(ApplicationArguments args) throws Exception {
//		// Insert data into the database
//		Club club = new Club();
//
//		club.setClub_name("Descrypters");
//		club.setClub_username("descrypters");
//		club.setClub_password("descrypters@123");
//		club.setDept("IT");
//		club.setDescription("This is Programming Club");
//		club.setLogo("Not available");
//		club.setMentor("Nikita Desai");
//
//		Event event = new Event();
//
//		event.setBrochure("not available");
//		event.setDescription("Recursion master class");
//		event.setEventName("Recursion");
//		event.setEventVenue("MMH");
//		event.setClub(club);
//
//		Event event1 = new Event();
//		event1.setBrochure("not available1");
//		event1.setDescription("Recursion master class1");
//		event1.setEventName("Recursion1");
//		event1.setEventVenue("MMH1");
//		event1.setClub(club);
//
//		List<Event> eventList = new ArrayList<>();
//
//		eventList.add(event);
//		eventList.add(event1);
//
//		club.setEventList(eventList);
//
//		Student student = new Student();
//		student.setDept("IT");
//		student.setSem("6");
//		student.setEmail("ayush@gmail.com");
//		student.setName("Ayush");
//		student.setPassword("ayush@123");
//		student.setUsername("ayush");
//
//		Student student1 = new Student();
//		student1.setDept("IT1");
//		student1.setSem("6 1");
//		student1.setEmail("ayush1@gmail.com");
//		student1.setName("Ayush1");
//		student1.setPassword("ayush1@123");
//		student1.setUsername("ayush1");
//
//		Student student2 = new Student();
//		student2.setDept("IT2");
//		student2.setSem("6 2");
//		student2.setEmail("ayush2@gmail.com");
//		student2.setName("Ayush2");
//		student2.setPassword("ayush2@123");
//		student2.setUsername("ayush2");
//
//		Student student3 = new Student();
//		student3.setDept("IT3");
//		student3.setSem("6 3");
//		student3.setEmail("ayush3@gmail.com");
//		student3.setName("Ayush3");
//		student3.setPassword("ayush3@123");
//		student3.setUsername("ayush3");
//
//		List<Student> studentList = new ArrayList<>();
//		List<Student> studentList2 = new ArrayList<>();
//
//		studentList.add(student);
//		studentList.add(student1);
//
//		studentList2.add(student2);
//		studentList2.add(student3);
//
//		event.setStudent(studentList);
//		event1.setStudent(studentList2);
//
//		eventRepo.save(event1);
//	}

	@Bean
	public ModelMapper modelMapper(){
		return new ModelMapper();
	}

	@Bean
	public WebMvcConfigurer corsConfigurer() {
		return new WebMvcConfigurer() {
			@Override
			public void addCorsMappings(CorsRegistry registry) {
				registry.addMapping("/").allowedOrigins("http://localhost:5173");
			}
		};
	}
}
