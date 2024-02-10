package com.campusconnect.services.impl;

import com.campusconnect.dto.AdminDto;
import com.campusconnect.entities.Admin;
import com.campusconnect.repositories.AdminRepo;
import com.campusconnect.services.AdminService;
import lombok.Setter;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Service;

@Service
public class AdminServiceImpl implements AdminService {

    @Autowired
    private AdminRepo adminRepo;

    @Autowired
    @Qualifier("modelMapper")
    private ModelMapper model;
    @Override
    public AdminDto createAdmin(AdminDto admindto) {
        Admin admin = model.map(admindto,Admin.class);
        Admin admin1 = adminRepo.save(admin);
        return model.map(admin1, AdminDto.class);
    }

    @Override
    public AdminDto updateAdmin(AdminDto admindto) {
        return null;
    }

    @Override
    public AdminDto getStudentById(AdminDto admindto) {
        return null;
    }
}
