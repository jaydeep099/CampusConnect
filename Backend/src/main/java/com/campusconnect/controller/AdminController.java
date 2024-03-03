package com.campusconnect.controller;

import com.campusconnect.dto.AdminDto;
import com.campusconnect.services.AdminService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/admin")
public class    AdminController {
    @Autowired
    private AdminService adminService;

    @PostMapping("/")
    private ResponseEntity<?> createAdmin(@RequestBody AdminDto adminDto){
        AdminDto adminDto1 = adminService.createAdmin(adminDto);
        return new ResponseEntity<>(adminDto1, HttpStatus.CREATED);
    }

   @DeleteMapping("/")
    private ResponseEntity<?> deleteAdmin(@RequestBody AdminDto adminDto){
        AdminDto adminDto1 = adminService.deleteAdmin(adminDto);
        return new ResponseEntity<>(adminDto1, HttpStatus.CREATED);
    }

}
