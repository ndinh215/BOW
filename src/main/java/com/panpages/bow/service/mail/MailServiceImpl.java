package com.panpages.bow.service.mail;

import java.io.StringWriter;
import java.util.Iterator;
import java.util.Set;

import org.apache.log4j.Logger;
import org.apache.velocity.Template;
import org.apache.velocity.VelocityContext;
import org.apache.velocity.app.VelocityEngine;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.ApplicationContext;
import org.springframework.mail.MailException;
import org.springframework.mail.MailSender;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.stereotype.Service;

import com.panpages.bow.model.Mail;

@Service("mailService")
public class MailServiceImpl implements MailService {
	@Autowired 
	ApplicationContext ctx;
	
	@Autowired
	private MailSender mailSender;
	
	@Autowired
	private VelocityEngine velocityEngine;
	
	private static final Logger logger = Logger.getLogger(MailServiceImpl.class);

	public void sendMail(Mail mail) throws MailException {
		try {
			SimpleMailMessage message = new SimpleMailMessage();

			message.setFrom(mail.getMailFrom());
			message.setTo(mail.getMailTo());
			message.setSubject(mail.getMailSubject());
			
			// String mailTemplatePath = ctx.getEnvironment().getProperty(ConfigConstant.MAIL_TEMPLATE_PATH.getName());
			// String mailTemplateFilePath = String.format("%1$s%2$s%3$s", mailTemplatePath, File.separator, mail.getTemplateName());
			Template template = velocityEngine.getTemplate(mail.getTemplateName());

			VelocityContext velocityContext = new VelocityContext();
			Set<String> fieldKeys = mail.getFields().keySet();
			Iterator<String> keyIterator = fieldKeys.iterator();
			while(keyIterator.hasNext()) {
				String fieldKey = keyIterator.next();
				String fieldValue = mail.getFields().get(fieldKey);
				velocityContext.put(fieldKey, fieldValue);
			}

			StringWriter stringWriter = new StringWriter();
			template.merge(velocityContext, stringWriter);
			message.setText(stringWriter.toString());

			mailSender.send(message);
		} catch (MailException ex) {
			ex.printStackTrace();
			logger.error(ex.getStackTrace());
			throw ex;
		}
	}
}
