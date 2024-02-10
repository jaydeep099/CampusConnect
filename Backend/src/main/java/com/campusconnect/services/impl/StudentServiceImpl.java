package com.campusconnect.services.impl;

import com.campusconnect.dto.StudentDto;
import com.campusconnect.entities.Student;
import com.campusconnect.repositories.StudentRepo;
import com.campusconnect.services.StudentService;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Service;

@Service
public class StudentServiceImpl implements StudentService {

    @Autowired
    private StudentRepo studentRepo;

    @Autowired
    @Qualifier("modelMapper")
    private ModelMapper model;
    @Override
    public StudentDto createStudent(StudentDto studentdto) {
        Student student = model.map(studentdto,Student.class);
        Student student1 = studentRepo.save(student);
        return model.map(student1,StudentDto.class);
    }

    @Override
    public StudentDto updateStudent(StudentDto studentdto) {
        return null;
    }

    @Override
    public StudentDto deleteStudent(StudentDto studentdto) {
        return null;
    }

    @Override
    public StudentDto getStudentById(StudentDto studentdto) {
        return null;
    }
}
