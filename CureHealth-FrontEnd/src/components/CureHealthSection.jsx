/** @format */

import React from "react";

const CureHealthSection = () => {
  const data = {
    title: "Your One-Stop Online Pharmacy - CureHealth",
    description:
      "We've got you covered! We now deliver in 10+ cities and towns across 220+ pin codes. We thereby cover every nook and corner of the country! The major cities in which we deliver include Mumbai, Delhi, Bengaluru, Ahmedabad, Hyderabad, Chennai, Pune, Gurgaon, Jaipur, Noida, Lucknow, Ghaziabad & Vadodara.",
    howItWorks:
      "CureHealth is here to help you take it easy! We are amongst one of India's top online pharmacy and medical care platforms. It enables you to order pharmaceutical and healthcare products online by connecting you to registered retail pharmacies and get them delivered to your home. We are an online medical store, making your purchase easy, simple, and affordable!",
    deliveryService:
      "Our doorstep delivery service is available in PAN-India across top cities like Bangalore, Delhi, Mumbai, Kolkata, Hyderabad, Gurgaon, Noida, Pune, etc. Our online medical store also allows you to choose from 1 lakh+ products including OTC products and medical equipment. CureHealth is a one-stop online medical platform where you can also book diagnostic tests including blood tests, full-body checkups, and other preventive health check-ups at an affordable cost, right from the comfort of your home. We have partnered with trusted & certified labs that arrange for a sample pick-up from the convenience of your home. They also provide you with timely reports.",
    preferredPharmacy:
      "Lucrative offers on our platform allow you to make payment online and via various payment wallets at a discounted price. Alternatively, you can also choose to pay cash on delivery as we deliver the products at your doorstep. We cater to all your pharmaceutical needs and also make ordering medicines online a hassle-free experience for you. We connect you only with registered retail pharmacies & certified diagnostic labs. We ensure that healthcare is affordable to all and make the process of ordering online simple.",
    subscriptionService:
      "It’s tough to remember to refill every month, especially in the case of chronic diseases. CureHealth’s subscription service not only ensures that you are reminded of your refills but also makes sure that you are never out on your medical essentials. You will get a reminder every month and your order will be delivered at your convenience!",
    healthInformation:
      "CureHealth delivers reliable and accurate medical information that has been carefully written, vetted and validated by our health experts. Our specialists curate high-quality and most reliable literature about medicines, illnesses, lab tests, Ayurvedic and over the counter health products.",
    slogan: "We Believe in ‘Simplifying Healthcare, Impacting Lives!’",
  };

  return (
    <div className='bg-gray-100 py-12 pl-10 pr-4 my-3 shadow-xl rounded-lg'>
      <div className='container px-8'>
        <h2 className='text-lg font-bold mb-8'>{data.title}</h2>
        <p className='text-sm mb-4'>{data.description}</p>
        <p className='text-sm mb-4'>{data.howItWorks}</p>
        <p className='text-sm mb-4'>{data.deliveryService}</p>
        <p className='text-sm mb-4'>{data.preferredPharmacy}</p>
        <p className='text-sm mb-4'>{data.subscriptionService}</p>
        <p className='text-sm mb-4'>{data.healthInformation}</p>
        <p className='font-bold'>{data.slogan}</p>
      </div>
    </div>
  );
};

export default CureHealthSection;
