package com.ship.web.person;

import java.text.DateFormat;
import java.text.SimpleDateFormat;

import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.stereotype.Component;

@Component
public class PersonInit implements ApplicationRunner{
	private PersonRepository personRepositoy;
	private static final DateFormat df = new SimpleDateFormat("yyyy-MM-dd");
	
	public PersonInit(PersonRepository personRepositoy) {
		this.personRepositoy = personRepositoy;
	}
	@Override
	public void run(ApplicationArguments args) throws Exception {
		long count = personRepositoy.count();
		if(count == 0) {
			Person person = null;
			String[][] mtx= {
				{"hong","1","홍길동","1980-01-01"},
				{"kim","1","김유신","1980-05-05"},
				{"park","1","박지성","1981-06-05"},
				{"you","1","유관선","1985-09-09"}
				};
		for(String[] arr: mtx) {
				person = new Person();
				person.setUserid(arr[0]);
				person.setPasswd(arr[1]);
				person.setName(arr[2]);
				person.setBirthday(df.parse(arr[3]));
				personRepositoy.save(person);
				
			}	
		}
		
	}

}
