package com.campusconnect.repositories;

import com.campusconnect.dto.StudentDto;
import com.campusconnect.entities.Student;
import org.springframework.data.jpa.repository.JpaRepository;

public interface StudentRepo extends JpaRepository<Student, Long> {
    Student findStudentByStudentUsernameAndStudentPassword(String username,String password);
}
