package com.campusconnect.controller;


import com.campusconnect.dto.StudentDto;
import com.campusconnect.services.StudentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/student")
public class StudentController {
    @Autowired
    private StudentService studentService;

    @PostMapping("/")
    private ResponseEntity<?> addStudent(@RequestBody StudentDto studentDto)
    {
        StudentDto studentDto1 = studentService.createStudent(studentDto);
        return new ResponseEntity<>(studentDto1, HttpStatus.CREATED);
    }
}
