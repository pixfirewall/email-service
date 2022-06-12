import { MailerService } from '@nestjs-modules/mailer';
import { Injectable } from '@nestjs/common';
import { EmailData } from './email.interface';

@Injectable()
export class MailService {
  constructor(private mailerService: MailerService) {}

  async sendUserConfirmation(emailData: EmailData) {
    const { to, subject, template, name } = emailData;
    return this.mailerService.sendMail({
      to,
      subject,
      template,
      context: {
        name,
      },
    });
  }
}
