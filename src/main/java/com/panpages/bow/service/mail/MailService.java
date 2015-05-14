package com.panpages.bow.service.mail;

import java.util.Map;

import org.springframework.mail.MailException;

import com.panpages.bow.model.Mail;
import com.panpages.bow.model.Survey;

public interface MailService {	

	void sendMail(Mail mail) throws MailException;

	void sendMail(Survey survey, Map<String, String> params) throws MailException;
	
}
