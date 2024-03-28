package com.campusconnect.services;

import com.campusconnect.dto.StudentDto;

public interface StudentService {
    public StudentDto createStudent(StudentDto studentdto);

    public StudentDto updateStudent(StudentDto studentdto , Long studentId);

    public void deleteStudent(Long studentId);

    public StudentDto getStudentById(Long studentId);

    public StudentDto loginStudent(String username,String password);
}
