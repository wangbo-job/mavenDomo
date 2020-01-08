package com.rikao.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;

import com.alibaba.dubbo.config.annotation.Service;
import com.rikao.mapper.UserMapper;
import com.rikao.pojo.User;
import com.rikao.service.UserService;

@Service
public class UserServiceImpl implements UserService{

	@Autowired
	private UserMapper userMapper;
	
	public void add(User user) {
		userMapper.insert(user);
	}

	public List<User> findAll() {
		return userMapper.selectByExample(null);
	}

}
