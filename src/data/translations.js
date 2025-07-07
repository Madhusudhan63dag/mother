import { Shield, Leaf, Brain, Hand } from 'lucide-react';
import one from '../assets/1.webp'
import two from '../assets/2.webp'
import three from '../assets/3.webp'
import four from '../assets/4.webp'
import five from '../assets/5.webp'

export const translations = {
  en: {
    nav: {
      home: 'Home',
      homelink: '/',
      aboutUs: 'About Us',
      aboutUslink: '/about',
      product: 'Shop Mother Noni Power Plus',
      productlink: '/product',
      privacyPolicy: 'Privacy Policy',
      privacyPolicylink: '/privacy',
      returnPolicy: 'Return Policy',
      returnPolicylink: '/return',
      Checkout: 'Checkout',
      Checkoutlink: '/checkouts',
      contactUs: 'Contact Us',
      contactUslink: '/contact',
      terms: "Terms & Conditions",
      natural: "100% Natural",
      lastone: "© 2025. All Rights Reserved By Mother Noni Power Plus",
      termslink: '/terms',
      // blog: 'Blog',
      // bloglink: '/blog',
    },
    hero: {
      title: 'Complete Herbal Wellness with Mother Noni Power Plus',
      description: 'Naturally support blood sugar, digestion, and joint health with our all-in-one herbal formulation.'
    },
    about: {
      title: 'About Mother Noni Power Plus',
      content1: `Mother Noni Power Plus is a 100% herbal formulation designed to provide natural support for managing diabetes, promoting healthy digestion, and offering relief from joint pain. Enriched with over 25 Ayurvedic herbs, this solution empowers your body to restore balance, energy, and overall vitality without side effects.`,
      content2: `Our commitment lies in blending tradition with modern wellness. With AYUSH-certified formulation, Mother Noni Power Plus delivers science-backed herbal care for blood sugar control, digestive health, and joint mobility—all in one. Whether you’re managing diabetes or seeking full-body rejuvenation, this product supports your journey to better health naturally.`,
      question1: `Why Choose Mother Noni Power Plus?`,
      question2: "Triple Action Support:",
      answer1: `Our formulation targets three key wellness areas: blood sugar balance, digestive health, and joint comfort—offering you a comprehensive and holistic solution.`,
      question3: "Herbal Potency in Every Drop:",
      answer2: `Infused with the goodness of Amla, Ashwagandha, Neem, Karela, Jamun, Tulsi, and more, this herbal solution enhances metabolism, relieves bloating, and supports sugar control.`,
      question4: "Simple Daily Use:",
      answer3: `Just 3–5 ml with water after meals—morning and evening. Safe, chemical-free, and easy to incorporate into any lifestyle.`
    },
    product: {
      title: 'Mother Noni Power Plus',
      subtitle: 'Herbal Tonic for Blood Sugar, Digestion & Joint Support',
      title2: `Why Choose Our All-in-One Herbal Solution?`,
      content1: `More than just a supplement, Mother Noni Power Plus is your go-to herbal remedy for better sugar control, weight support, improved digestion, and joint health.`,
      content2: `The blend includes 25+ herbs like Green Tea, Neem, Karela, Jamun, Ashwagandha, and Amla—working synergistically to detoxify your system, promote insulin sensitivity, and reduce inflammation.`,
      content3: `Each box contains bottles of potent 100% herbal syrup. Use 5ml twice daily with water after meals. No complicated routines—just consistent herbal support for your health journey.`
    },
    faq: {
      title: "FAQ's",
      faqData: [
        {
          question: "What is Mother Noni Power Plus?",
          answer: "A 100% herbal tonic formulated with over 25 Ayurvedic herbs to help manage blood sugar, digestion, weight, and joint health."
        },
        {
          question: "How do I use it?",
          answer: "Take 3–5 ml with water twice a day—after breakfast and after dinner."
        },
        {
          question: "Is it safe for daily use?",
          answer: "Yes. It’s completely natural and free from harmful chemicals. Safe for long-term use and AYUSH certified."
        },
        {
          question: "Can it help with joint pain and digestion too?",
          answer: "Absolutely. The herbs used are known to relieve inflammation, support liver health, and aid digestion."
        },
        {
          question: "Who can benefit from this?",
          answer: "Anyone looking for natural blood sugar control, digestive support, or joint pain relief—including those managing diabetes or thyroid imbalance."
        }
      ]
    },
    testimonials: {
      title: 'Real Experiences from Real People',
      testimonial: [
        {
          image: one,
          text: "I’ve been using Mother Noni Power Plus for two months and my blood sugar levels are more stable. I also feel lighter and have fewer digestion issues.",
          name: 'RAJESH KUMAR',
          role: 'School Principal',
          rating: 5,
          location: 'Bangalore, Karnataka',
          beforeAfter: [
            'More stable glucose levels',
            'Improved digestion',
            'Reduced bloating',
            'Better morning energy'
          ]
        },
        {
          image: two,
          text: "As a yoga instructor, I wanted a natural solution. This product supports my energy, digestion, and sugar levels. Highly recommend it.",
          name: 'Dhruv',
          role: 'Yoga Instructor',
          rating: 5,
          location: 'Lucknow, Uttar Pradesh',
          beforeAfter: [
            'Better post-meal sugar response',
            'Balanced mood',
            'More energy in sessions',
            'Reduced cravings'
          ]
        },
        {
          image: three,
          text: "Joint pain relief and better digestion in one product. I’m genuinely impressed with how effective and easy it is.",
          name: 'SURESH IYER',
          role: 'Accountant',
          rating: 4.5,
          location: 'Chennai, Tamil Nadu',
          beforeAfter: [
            'Relief from joint stiffness',
            'Lighter digestion',
            'Less sugar spikes',
            'Improved sleep'
          ]
        },
        {
          image: four,
          text: "Didn’t expect an herbal tonic to help this much. I’ve lost weight and my energy has improved significantly.",
          name: 'SIDDHARTH',
          role: 'Retired Banker',
          rating: 5,
          location: 'Delhi NCR',
          beforeAfter: [
            'Weight loss',
            'Fewer sugar crashes',
            'Active mornings',
            'Improved stamina'
          ]
        }
      ]
    },       
    contact: {
      title: 'Contact Us',
      address: 'India',
      phone: '+91 939 227 7389',
      email: 'customercareproductcenter@gmail.com',
      info: "information",
      det: "Details",
      pagetitle: 'Need your help?',
      pagesectitle: 'You can contact us today ',
      pageinname: "Your Name",
      pageinemail: "Your Email",
      pageinphone: "Your Phone",
      pageinsubject: "Subject",
      pageinmessage: "Write you present condition...",
      pagesubbutton: "Send Message",
    },  
    returnpage: {
      title: 'Return Policy',
      sectitle: 'Return Policy',
      content1: `Mother Noni Power Plus is committed to helping millions of people become fitter, healthier, and happier; we stand behind the quality of our products with a 15-day return policy. If you don't believe our products are improving the quality of your life, we offer a refund within 15 days of receipt of your order, less the shipping cost. Any remaining product and original packaging must be returned to Mother Noni Power Plus for a refund.`,
      content2: `Eligibility – Your purchase is eligible for a return if it meets the criteria below:`,
      content3: `Refunds require returning used or unused product packaging of Mother Noni Power Plus Products.`,
      content4: `Return Process has to be done by the customer only.`,
      content5: `The product has to reach the specified address on the website.`,
      content6: `The product has to arrive within 15 days of the date of purchasing the product.`,
      content7: `We will not accept damaged products.`,
      content8: `Amount will be added to the original source of payment done by the customer within 10 working days.`,
    },    
    sections: [
      {
        title: "Information We Collect",
        content: [
          {
            text: "This Privacy Policy describes how Dr.Joints Fat and Weight Loss Oil collects, uses, and discloses your information when you use our website https://drjoints.in"
          },
          {
            subtitle: "Personal Information",
            text: "This includes information that can be used to identify you, such as your name, billing address, shipping address, email address, and phone number. You only provide this information when you contact us through a form on the Site."
          },
          {
            subtitle: "Non-Personal Information",
            text: "This includes information that cannot be used to identify you, such as your browser type, operating system, IP address, browsing activity on the Site, and demographic information (e.g., age, gender). This information is collected automatically when you visit the Site."
          }
        ]
      }
    ],
    privacy: {
      title: "Privacy Policy",
      lastUpdated: "Last Updated: June 2025",
      sections: [
        {
          title: "Information We Collect",
          content: [
            {
              text: "This Privacy Policy describes how Mother Noni Power Plus uses and discloses your information when you use our website Mother Noni Power Plus"
            },
            {
              subtitle: "Personal Information:",
              text: "This includes information that can be used to identify you, such as your name, billing address, shipping address, email address, and phone number. You only provide this information when you contact us through a form on the Site."
            },
            {
              subtitle: "Non-Personal Information:",
              text: "This includes information that cannot be used to identify you, such as your browser type, operating system, IP address, browsing activity on the Site, and demographic information (e.g., age, gender). This information is collected automatically when you visit the Site."
            }
          ]
        },
        {
          title: "How We Use Your Information",
          content: [
            {
              subtitle: "Personal Information:",
              text: "We will only use your personal information to respond to inquiries and requests. We will not share your personal information with any third parties without your consent, except as required by law."
            },
            {
              subtitle: "Non-Personal Information:",
              text: "We use non-personal information to improve the Site and understand how users interact. We may also use non-personal information for internal marketing and promotional purposes."
            }
          ]
        },
        {
          title: "Cookies and Tracking Technologies",
          content: `We may use cookies and other tracking technologies to collect non-personal information about your use of the Site. Cookies are small data files that are stored on your device when you visit a website. They allow the website to remember your actions and preferences over time. If you visit our login page, we will set a temporary cookie to determine if your browser accepts cookies. This cookie contains no personal data and is discarded when you close your browser. When you log in, we will also set up several cookies to save your login information and your screen display choices. Login cookies last for two days, and screen options cookies last for a year. If you select "Remember Me", your login will persist for two weeks. If you log out of your account, the login cookies will be removed. If you edit or publish an article, an additional cookie will be saved in your browser. This cookie includes no personal data and simply indicates the post ID of the article you just edited. It expires after 1 day.`
        },
        {
          title: "Third-Party Service Providers",
          content: "We may use third-party service providers to help us operate the Site and deliver our services. These service providers may have access to your non-personal information. We will not share your personal information with any third-party service providers for their marketing purposes without your consent."
        },
        {
          title: "Security",
          content: "We take reasonable steps to protect your information from unauthorized access, disclosure, alteration, or destruction. However, no website or internet transmission is completely secure."
        },
        {
          title: "Children's Privacy",
          content: "The Site is not directed to children under the age of 13. We do not knowingly collect personal information from children under 13. If you are a parent or guardian and you believe that your child has provided us with personal information, please contact us. We will take steps to remove the information from our records."
        },
        {
          title: "Changes to this Privacy Policy",
          content: "We may update this Privacy Policy from time to time. We will post any changes on the Site. We encourage you to review this Privacy Policy periodically for the latest information on our privacy practices."
        }
      ]
    },    
    checkout: {
      title: "Checkout",
      sectitle: "Billing Details",
      firstname: 'First Name ',
      lastname: 'Last Name ',
      country: 'Country/ Region ',
      address: 'Street Address ',
      city: 'Town/ City ',
      countrytitle: "Country ",
      phone: "Phone ",
      email: "Email Address ",
      order: "Your Order",
      clientaddress: "Apartment/Suite",
      mode: "Payment Mode",
      total: "Total",
      shipping: "Shipping",
      subtotal: "Subtotal",
      product: "Product",
      processing: "Processing...",
      successfully: "Order Placed Successfully!",
      thank: "Thank you for your purchase. You will receive a confirmation email shortly.",
      continue: "Continue Shopping"
    },
    features: [
      {
        icon: Brain,
        title: "Effective Pain Relief",
        color: "text-blue-500"
      },
      {
        icon: Leaf,
        title: "Natural Ingredients",
        color: "text-green-500"
      },
      {
        icon: Hand,
        title: "Promotes Recovery",
        color: "text-orange-500"
      },
      {
        icon: Shield,
        title: "Convenient And Easy To Use",
        color: "text-purple-500"
      }
    ],
    termsData: {
      title: "Terms & Conditions",
      sections: [
        {
          title: "Welcome to Mother Noni Power Plus!",
          content:
            "These terms and conditions outline the rules and regulations for the use of the Mother Noni Power Plus website, located at https://www.d52care.com, a natural herbal supplement for diabetes wellness support. By accessing this website we assume you accept these terms and conditions. Do not continue to use Mother Noni Power Plus if you do not agree to take all of the terms and conditions stated on this page."
        },
        {
          title: "Definitions",
          content:
            "The following terminology applies to these Terms and Conditions, Privacy Statement and Disclaimer Notice, and all Agreements: \"Client\", \"You\" and \"Your\" refers to you, the person who logs on to this website and is compliant with the Company's terms and conditions. \"The Company\", \"Ourselves\", \"We\", \"Our\" and \"Us\" refers to our Company. \"Party\", \"Parties\", or \"Us\" refers to both the Client and ourselves. All terms refer to the offer, acceptance, and consideration of payment necessary to undertake the process of our assistance to the Client in the most appropriate manner for the express purpose of meeting the Client's needs in respect of provision of the Company's stated services, by and subject to, prevailing laws. Any use of the above terminology or other words in the singular, plural, capitalization, and/or he/she or they, are taken as interchangeable and therefore as referring to the same."
        },
        {
          title: "Cookies",
          content:
            "We employ the use of cookies. By accessing Mother Noni Power Plus, you agree to use cookies in agreement with Mother Noni Power Plus's Privacy Policy. Most interactive websites use cookies to let us retrieve the user's details for each visit. Cookies are used by our website to enable the functionality of certain areas to make it easier for people visiting our website. Some of our affiliate/advertising partners may also use cookies."
        },
        {
          title: "License",
          content:
            "Unless otherwise stated, Mother Noni Power Plus and/or its licensors own the intellectual property rights for all material on Mother Noni Power Plus. All intellectual property rights are reserved. You may access this from Mother Noni Power Plus for your own personal use subject to restrictions set in these terms and conditions."
        },
        {
          title: "You must not:",
          content: [
            "Republish material from Mother Noni Power Plus",
            "Sell, rent, or sub-license material from Mother Noni Power Plus",
            "Reproduce, duplicate, or copy material from Mother Noni Power Plus",
            "Redistribute content from Mother Noni Power Plus"
          ]
        },
        {
          title: "User Comments",
          content:
            "Parts of this website offer an opportunity for users to post and exchange opinions and information in certain areas of the website. Mother Noni Power Plus does not filter, edit, publish, or review Comments prior to their appearance on the website. Comments do not reflect the views and opinions of Mother Noni Power Plus, its agents, and/or affiliates. Comments reflect the views and opinions of the person who posts them. To the extent permitted by applicable laws, Mother Noni Power Plus shall not be liable for the Comments or any liability, damages, or expenses caused and/or suffered as a result of any use of and/or posting of and/or appearance of the Comments on this website."
        },
        {
          title: "Content Liability",
          content:
            "We shall not be held responsible for any content that appears on your Website. You agree to protect and defend us against all claims that are arising on your Website. No link(s) should appear on any Website that may be interpreted as libelous, obscene, or criminal, or which infringes, otherwise violates, or advocates the infringement or other violation of, any third-party rights."
        }
      ]
    }

    }
};

