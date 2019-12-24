package com.ship.web.article;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

import org.springframework.stereotype.Component;

import lombok.Data;

@Data
@Entity
@Table(name="ARTICLE")
@Component
public class Article {
	@Id
	@GeneratedValue
	@Column(name="ID", nullable = false)
	private Long id;
	@Column(name="TITLE", length=64, nullable = false)
	private String title;
	@Column(name="CONTENT", length=64, nullable = false)
	private String content;
	@Column(name="IMAGE", length=64, nullable = false)
	private String image;
	@Temporal(TemporalType.DATE)
	@Column(name="REGDATE", nullable = false)
	private Date regdate;
}
