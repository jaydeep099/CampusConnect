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

    @PostMapping("/")
    public ResponseEntity<?> createStudent(@RequestBody StudentDto studentDto)
    {
        StudentDto studentDto1 = this.studentService.createStudent(studentDto);
        return new ResponseEntity<>(studentDto1, HttpStatus.CREATED);
    }

    @PutMapping("/{studentId}")
    public ResponseEntity<?> updateStudent(@RequestBody StudentDto studentDto , @PathVariable Long studentId){
        StudentDto updatedStudent = this.studentService.updateStudent(studentDto,studentId);
        return  new ResponseEntity<>(updatedStudent,HttpStatus.OK);
    }

    @DeleteMapping("/{studentId}")
    public ResponseEntity<?> deleteStudent(@PathVariable long studentId){
        this.studentService.deleteStudent(studentId);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @GetMapping("/{studentId}")
    public  ResponseEntity<?> getSingleStudent(@PathVariable Long studentId){
       return ResponseEntity.ok(this.studentService.getStudentById(studentId));
    }

}
