package com.ship.web.person;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.stream.Stream;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ship.web.util.Printer;

@RestController
@CrossOrigin(origins = "http://localhost:8081")
public class PersonController {
	@Autowired private PersonRepository personRepository;
	@Autowired private Printer printer;
	@Autowired private Person person;
	@Autowired ModelMapper modelMapper;
	
	@Bean
	public ModelMapper modelMapper() {return new ModelMapper();}
	
	@RequestMapping("/")
	public String index() {
		Iterable<Person> all = personRepository.findAll();
		StringBuilder sb = new StringBuilder();
		all.forEach(p -> sb.append(p.getName()+" "));
		return sb.toString();
	}
	@PostMapping("/login")
	public HashMap<String, Object> login(@RequestBody Person param) {
		HashMap<String, Object> map = new HashMap<>();
		printer.accept("로그인 진입");
		printer.accept(String.format("아이디 : %s", param.getUserid()));
		printer.accept(String.format("비밀번호 : %s", param.getPasswd()));
		person = personRepository.findByUseridAndPasswd(
				param.getUserid(), 
				param.getPasswd());
		if(person != null) {
			printer.accept("로그인 성공");

			map.put("result", "SUCCESS");
			map.put("person", person);
		}else {
			printer.accept("로그인실패");
			map.put("result", "FAIL");
			map.put("person", person);
		}
		return map;
	}
	@DeleteMapping("/widthdrawal/{userid}")
	public void withdrawal(@PathVariable String userid) {
		printer.accept("탈퇴진입");
		personRepository.delete(personRepository.findByUserid(userid));
	
	}
	@PutMapping("/update/{userid}")
	public void update(@PathVariable String userid) {
		printer.accept("탈퇴진입");
		personRepository.save(personRepository.findByUserid(userid));
	
	}
	@PostMapping("/join")
	public HashMap<String, Object> join(@RequestBody Person param){
		printer.accept("가입진입");
		HashMap<String, Object> map = new HashMap<>();
		map.clear();
		personRepository.save(person);
		if(person != null) {
			map.put("result", "SUCCESS");
			printer.accept("가입성공");
		}else {
			map.put("result", "FAIL");
			printer.accept("가입실패");
		}
		return map;
	}
	@GetMapping("/students")
	public Stream<PersonDTO> list(){
		printer.accept("list들어옴");
		Iterable<Person> entites = personRepository.findAll();
		
		List<PersonDTO> list = new ArrayList<>();
		for(Person p : entites) {
			PersonDTO dto = modelMapper.map(p, PersonDTO.class);
			list.add(dto);
		}
		
		printer.accept("list count"+list.size());
		return list.stream().filter(role-> role.getRole().equals("student"));
		
	}
}
