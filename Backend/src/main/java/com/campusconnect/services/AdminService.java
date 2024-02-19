package com.campusconnect.services;

import com.campusconnect.dto.AdminDto;

public interface AdminService {
    public AdminDto createAdmin(AdminDto admindto);
    public AdminDto updateAdmin(AdminDto admindto);
    public AdminDto deleteAdmin(AdminDto admindto);
}
