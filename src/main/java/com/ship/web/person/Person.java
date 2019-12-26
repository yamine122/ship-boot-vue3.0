package com.ship.web.person;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;
import javax.persistence.UniqueConstraint;

import org.springframework.stereotype.Component;

import lombok.Data;
@Component
@Data
@Entity
@Table(name="PERSON",
		uniqueConstraints={
		@UniqueConstraint(
			columnNames={"USERID"}
			)
})
public class Person {
	@Id
	@GeneratedValue
	@Column(name="ID", nullable=false)
	private Long id;
	@Column(name="USERID", length=64, nullable=false)
	private String userid;
	@Column(name="PASSWD", length=64, nullable=false)
	private String passwd;
	@Column(name="NAME", length=64, nullable=false)
	private String name;
	@Temporal(TemporalType.DATE)
	@Column(name="BIRTHDAY")
	private Date birthday;
	@Column(name="GENDER")
	private String gender;
	@Column(name="HAK")
	private int hak;
	@Column(name="BAN")
	private int ban;
	@Column(name="SCORE")
	private int score;
	@Column(name="ROLE")
	private String role;

	
	
	
}
