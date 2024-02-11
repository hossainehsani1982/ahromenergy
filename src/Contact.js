import './Contact.css';
import React from 'react';
import Helmet from 'react-helmet';

function Contact() {
  return (
    <div className='contact-container'>
      <Helmet>
        <title>اهرم انرژی | تماس با ما</title>
      </Helmet>
      <div className="contact-container-header">
        <h3>اطلاعات تماس</h3>
      </div>
      <h3>دفتر مرکزی :‌تهران، بزرگراه رسالت، نبش بوستان، پلاک ۶</h3>
      <h3>کد پستی : ۳۱۳۸۸۷۸۵۴۹</h3>
      <h3>تلفن : ۰۲۱۴۴۴۵۱۷۱۰</h3>
      <h3>فکس : ۰۲۱۴۴۴۵۱۷۱۰</h3>
      <h3>پست الکترونیک : infor@AhromEnergy.com</h3>
    </div>
  );
}

export default Contact;