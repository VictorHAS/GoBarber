// Get your credentials in: https://mailtrap.io/
export default {
  host: 'smtp.mailtrap.io',
  port: 2525,
  secure: false,
  auth: {
    user: 'user',
    pass: 'password',
  },
  default: {
    from: 'Equipe GoBarber <noreply@gobarber.com>',
  },
};
