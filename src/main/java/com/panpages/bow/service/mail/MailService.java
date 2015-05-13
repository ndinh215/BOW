package com.panpages.bow.service.mail;

import org.springframework.mail.MailException;

import com.panpages.bow.model.Mail;

public interface MailService {	

	void sendMail(Mail mail) throws MailException;
	
}
