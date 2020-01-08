package com.rikao.shop.controller;

import java.util.List;

import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.alibaba.dubbo.config.annotation.Reference;
import com.rikao.pojo.User;
import com.rikao.service.UserService;
import com.rikao.shop.utils.AliyunOSSClientUtils;

@RestController
@RequestMapping("/user")
public class UserController {

	@Reference 
	UserService userService;
	
	@RequestMapping("/findAll")
	public List<User> findAll(){
		return userService.findAll();
	}
	
	@RequestMapping("/add")
	public Boolean add(@RequestBody User user){
	
		try {
			userService.add(user);
			return true;
		} catch (Exception e) {
			// TODO: handle exception
		}
		return false;
	}
	@RequestMapping("/uplod")
	public Object uplod(MultipartFile file){
		
		try {
			AliyunOSSClientUtils ossClientUtils = new AliyunOSSClientUtils();
			String uploadImg2Oss = ossClientUtils.uploadImg2Oss(file);
			String imgUrl = ossClientUtils.getImgUrl(uploadImg2Oss);
			return imgUrl;
		} catch (Exception e) {
			// TODO: handle exception
		}
		return false;
	}
	
	
}
