import React, { useState } from 'react';
import './socksitem.css';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi'; 
import Socksitem2 from './socksitem2.jsx'

const faqData = [
  {
    question: "NO-SHOW SOCKS VERSUS CREW SOCKS: WHICH IS BETTER?",
    answer: `Hey, everyone has a preference—but there’s no way to say which one is better. So, whether you want to hide your socks or show them off, we have some good news. The Allbirds Anytime sock collection has options available in no-show and crew styles.

Need something a little more in-between? We also have ankle socks, of course! Each pair, regardless of style, is made with a blend of light, breathable materials like tree fiber and organic cotton that keep your feet cool, dry, and happy.`,
  },
  {
    question: "WHAT IS THE MOST SUSTAINABLE MATERIAL FOR SOCKS?",
    answer: `One of the most sustainable materials for socks is our TENCEL™ Lyocell, made from renewable eucalyptus tree fibers. This eco-friendly fabric has minimal environmental impact during production because it uses less water and energy when compared to traditional materials. We combine this material with organic cotton to enhance softness and durability even more. Organic cotton is grown without harmful chemicals, further reducing the environmental footprint.`,
  },
  {
    question: "WHAT ARE SUSTAINABLE SOCKS?",
    answer: `Simple: sustainable socks are made from sustainable materials. The blend of materials in Allbirds Anytime socks includes organic cotton and TENCEL™ Lyocell, a sustainable fabric crafted from eucalyptus tree fibers. Choosing a sustainable option for frequently purchased essentials like socks is an easy way to help preserve the health of our planet.`,
  },
];

const SocksItem = () => {
  const [openIndexes, setOpenIndexes] = useState([]);

  const toggleAnswer = (index) => {
    if (openIndexes.includes(index)) {
      setOpenIndexes(openIndexes.filter((i) => i !== index));
    } else {
      setOpenIndexes([...openIndexes, index]);
    }
  };

  return (
    <>
    <div className="socks-faq-container">
      {faqData.map((item, index) => (
        <div className="faq-item" key={index}>
          <div className="faq-question" onClick={() => toggleAnswer(index)}>
            <span>{item.question}</span>
            <span className="faq-icon">
              {openIndexes.includes(index) ? <FiChevronUp /> : <FiChevronDown />}
            </span>
          </div>
          {openIndexes.includes(index) && (
            <div className="faq-answer">
              <p>{item.answer}</p>
            </div>
          )}
        </div>
      ))}
    </div>
    <Socksitem2/>
    </>
  );
};

export default SocksItem;
