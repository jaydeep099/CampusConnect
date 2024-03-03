package com.campusconnect.controller;


import com.campusconnect.dto.StudentDto;
import com.campusconnect.services.StudentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/student")
@CrossOrigin
public class StudentController {
    @Autowired
    private StudentService studentService;

    @PostMapping("/register")
    private ResponseEntity<?> addStudent(@RequestBody StudentDto studentDto)
    {
//        System.out.println(studentDto.getDept());
        StudentDto studentDto1 = studentService.createStudent(studentDto);
        return new ResponseEntity<>(studentDto1, HttpStatus.CREATED);
    }
}
