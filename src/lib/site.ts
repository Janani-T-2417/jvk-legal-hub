export const SITE = {
  name: "JVK Law Firm",
  advocate: "Adv. J. Vinay Kumar",
  tagline: "Professional Legal Solutions | Trusted Representation | Practical Advice",
  phone: "9100627656",
  phoneDisplay: "+91 91006 27656",
  email: "jvkadvocatevsp@gmail.com",
  address: {
    line1: "D.No. 28-2-59, Yellamma Thota Street",
    line2: "Beside Tummidi Brothers Showroom",
    line3: "Jagadamba Junction, Visakhapatnam – 530020",
  },
  hours: {
    weekdays: "Monday – Saturday: 9:00 AM – 9:00 PM",
    sunday: "Sunday: Holiday (Available on Calls)",
  },
  whatsappMessage:
    "Hello Adv. J. Vinay Kumar, I would like to discuss my legal matter and book a consultation.",
};

export const whatsappLink = (message = SITE.whatsappMessage) =>
  `https://wa.me/91${SITE.phone}?text=${encodeURIComponent(message)}`;

export const telLink = `tel:+91${SITE.phone}`;
export const mailLink = `mailto:${SITE.email}`;