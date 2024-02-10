package com.campusconnect.services;

import com.campusconnect.dto.StudentDto;

public interface StudentService {
    public StudentDto createStudent(StudentDto studentdto);

    public StudentDto updateStudent(StudentDto studentdto);

    public StudentDto deleteStudent(StudentDto studentdto);

    public StudentDto getStudentById(StudentDto studentdto);
}
