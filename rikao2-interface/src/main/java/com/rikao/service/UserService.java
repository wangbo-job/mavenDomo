package com.rikao.service;

import java.util.List;

import com.rikao.pojo.User;

public interface UserService {

	public void add(User user);
	
	public List<User> findAll();
}
