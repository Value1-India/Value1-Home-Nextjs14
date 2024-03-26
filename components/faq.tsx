'use client'
import Image from "next/image"
import Bot from '@/public/images/svgs/bot.svg';
import Question from '@/public/images/svgs/question-mrk.svg'
import { useState } from "react";
export default function FAQ() {
  const faqData = [
    {
      question: <div>What is the DigiGold product sold by Value1?</div>,
      answer: <div>DigiGold facilitates the purchase of physical bullion (i.e. bars of Gold/Silver) for as low as Re. 1 with the ease of online access. The customer can request for the delivery of Gold/Silver purchased from Value1 anytime they want in the form of coins/ bars and jewellery and it will be delivered at your doorstep. Customers can also sell the bullion (bought from us) in a secured and convenient manner back to Value1.</div>
    },
    {
      question: <div>What is the purity of the gold/silver that Value1 offers to customers in the DigiGold product?</div>,
      answer: <div>Value1, through its online platform, offers 24 carat 999 Gold and 24 carat 999 Silver.</div>
    },
    {
      question: <div>Why buy DigiGold from Value1?</div>,
      answer: <div>
        <ul className="list-disc list-inside">
          <li>Ease of Account Opening – Opening an Account with us is a quite simple, hassle-free process.</li>
          <li>Minimum Verification – Only mobile number verification is required for successful registration.</li>
          <li>No Additional Costs – No brokerage is charged. No charges for storage and insurance.</li>
          <li>Small Quantity – Value1 enables the purchase of Gold and Silver for as low as Rs. 1</li>
          <li>Better Prices – The bullion is available at wholesale market prices.</li>
          <li>Buy Back – The customer can sell the bullion bought from us at very low spreads.</li>
          <li>Delivery – The customer can avail delivery of bullion at their doorstep.</li>
          <li>Dedicated Customer Service – Contact the Customer Service Desk by Email and Call during the business hours of 10:00 am to 7:00 pm from Monday to Saturday, except on public holidays.</li>
        </ul>
      </div>
    },
    {
      question: <div>How to get started?</div>,
      answer: <div>On Value1, any resident Indian with a valid PAN/Form 60 and a bank account can start purchasing DigiGold. You must simply register by entering your mobile number and verifying it with the OTP provided to you.</div>
    },
    {
      question: <div>What is the quantity of Gold/Silver that I can buy and sell back to Value1?</div>,
      answer: <div>You can buy any quantity of Gold/Silver on Value1. The minimum amount of purchase allowed is Re.1. However, you are allowed to sell only the Gold/Silver that you have bought from us. You are not allowed to sell the gold or silver until 48 hours from the purchase time for security reasons.</div>
    },
    {
      question: <div>How does Value1 ensure a Fair and competitive price?</div>,
      answer: <div>The Buy and Sell prices are calculated using wholesale spot market pricing. We pass on the benefits from wholesale market prices to our consumers, making us more competitive than the competition.</div>
    },
    {
      question: <div>Is GST included in the quoted prices?</div>,
      answer: <div>All our prices quoted on the website are exclusive of GST and other applicable taxes. The applicable GST is added to the quoted price at the final stage of checkout.</div>
    },
    {
      question: <div>Why is there a difference in the Buy and Sell price on Value1?</div>,
      answer: <div>The price for Gold/Silver (i.e. Buy/Sell) is displayed on the Value1 website, and there is always a little disparity between the buy and sell prices. The spread varies depending on a variety of factors such as price volatility, supply, and external market circumstances. On the platform, we transparently quote the live prices. Furthermore, GST, which is imposed on the buy price, is not levied on the sell price, and there are other charges for payment gateways, trustees, and other services that contribute to the difference between the buy and sell prices.</div>
    },
    {
      question: <div>What happens to the proceeds when I sell my gold/silver?</div>,
      answer: <div>You receive the sale proceeds in your confirmed bank account when you sell your gold or silver. Within three working days, the funds will be credited to your bank account. You can contact our customer care if there are any delays.</div>
    },
    {
      question: <div>Are there any charges that I will have to bear while selling back to Value1?</div>,
      answer: <div>You can sell back at the market prices which are displayed on the website on a real- time basis. There are no additional charges.</div>
    },
    {
      question: <div>What is the Minimum Order Quantity (MOQ) to buy bullion?</div>,
      answer: <div>You can buy gold and silver for as low as Re. 1 up to four decimal grams</div>
    },
    {
      question: <div>Where can I find the invoice for each order?</div>,
      answer: <div>You can download the invoice from the My Orders section in the buy reports.</div>
    },
    {
      question: <div>How can orders be monitored?</div>,
      answer: <div>Customers can monitor their activities on the website by viewing all transactional details in the ‘My Orders’ section. To keep track of all the transactions, there are separate reports such as Buy Reports, Sell Reports, and My Orders, among others.</div>
    },
    {
      question: <div>Can orders be cancelled?</div>,
      answer: <div>Once orders have been successfully placed, they cannot be cancelled.</div>
    },
    {
      question: <div>Do I need KYC to be done?</div>,
      answer: <div>As per the government regulations, it is a statutory requirement and a part of regulatory instructions and compliance that KYC needs to be done for buying any product on the Value1 platform. We want to ensure that we have the correct KYC of the customers to enable us to identify the owners of the gold/silver lying in the vaults with accuracy. It is advised that proper KYC is updated to prevent any misuse of your gold account. In any case, you will be prompted to provide your PAN details once your buying reaches a certain threshold limit.</div>
    },
    {
      question: <div>Where is the physical Gold/Silver stored?</div>,
      answer: <div>The physical gold/silver is stored safely in the vault of Sequel, the service which is utilized by various banks in India and also by various Asset Management Companies (AMCs) for their Gold-ETFs. The physical Gold/Silver stored in the vault is also covered by insurance.</div>
    },
    {
      question: <div>Who is Sequel?</div>,
      answer: <div>Sequel Logistics (<a href="https://sequelglobal.com" className="text-gold-500 hover:text-gold-700">https://sequelglobal.com</a>) is a global leader in security-related services for banks, financial institutions, mines, retailers, diamond and jewellery industries, pharmaceuticals and a variety of other commercial and governmental customers.</div>
    },
    {
      question: <div>What is the role of ‘Independent Trustee’?</div>,
      answer: <div><span className="font-bold">Valgo Finsec Services Private Limited</span> formerly know as Valgo Securities Services Private Limited, managed & operated by SEQUEL group of companies has been appointed as an Independent Trustee, and they have the authority to act on behalf of clients and to protect their interests. On the bullion (i.e.Gold/Silver) you purchase, Valgo will have first and exclusive charge. Customers enable Value1 to send physical bullion to a secured vault on their behalf, which is verified by an Independent Trustee, after accepting the Terms and Conditions.</div>
    },
    {
      question: <div>Who is insuring the physical gold/silver?</div>,
      answer: <div>Under a comprehensive insurance contract, a top insurance firm insures the physical gold and silver housed in vaults. Our insurance also covers the gold, silver, and jewellery that is in transit at the time of delivery.</div>
    },
    {
      question: <div>How can I request delivery on Value1?</div>,
      answer: <div>The customer can request delivery of the Gold and Silver bought from Value1 in the form of coins, bars and jewellery and they shall be delivered at your doorstep. The customer can request the delivery by selecting from a wide range of articles and by paying a nominal making and delivery fee. The customer can request for the delivery of gold and silver coins of as low as 0.1gram gold and 1 gram silver.</div>
    },
    {
      question: <div>Which cities does Value1 deliver the Gold to?</div>,
      answer: <div>Value1 delivers to all the cities across India, through partnerships with secured logistics providers.</div>
    },
    {
      question: <div>How can I be sure of the quality of the products received?</div>,
      answer: <div>The customer can be assured of the quality of the Gold Coins and Jewellery delivered by Value1 as each and every article delivered is hallmarked by a government-approved hallmarking agency as per the BIS guidelines.</div>
    },
    {
      question: <div>Can I track the delivery of my purchase?</div>,
      answer: <div>The customer can be assured of the quality of the Gold Coins and Jewellery delivered by Value1 as each and every article delivered is hallmarked by a government-approved hallmarking agency as per the BIS guidelines.</div>
    },
    {
      question: <div>How many days does it take for Doorstep Delivery/after the successful placing of a shop order?</div>,
      answer: <div>The customer will receive the delivery at the shipping address indicated in the order within 10 working days of placing the order/requesting delivery.</div>
    },
    {
      question: <div>Who shall bear the risk of loss till the product is delivered to the customer?</div>,
      answer: <div>The risk of loss relating to the products shall be on Value1 till the time the product is delivered to the customer at its shipping address.</div>
    },
    {
      question: <div>My payment has failed, what should I do?</div>,
      answer: <div>Kindly do not panic. If your account was debited, it should be automatically reversed in 72 hours or according to your bank guidelines. We don’t recommend using NEFT as this method takes longer to process. If you still need help, please contact our customer support team.</div>
    },
    {
      question: <div>How can I exit/terminate the ongoing ‘Value1’ account?</div>,
      answer: <div>By contacting the customer care desk, you can request that your account be terminated. In response to your request, we will close your account. However, before your account is terminated, you must verify that any gold or silver in your account is sold back to Value1 at market price.</div>
    },
    {
      question: <div>Who should I contact in case of any queries?</div>,
      answer: <div>The partner platforms will provide the first level of support. To reach out to us, you can write to <a href="mailto:support@value1.in">support@value1.in</a>. You can also call us on +91 9884345603.</div>
    },
    // {
    //   question: '',
    //   answer: ''
    // },


    // Add more question and answer objects as needed
  ];
  const [selectedSection, setSelectedSection] = useState('first');
  return (
    <section data-aos='fade-up' data-aos-delay='200'>
      <div className="py-4 mt-28">
        <div className="px-4 sm:px-6 lg:px-8 flex flex-col justify-between">

          <div className="max-w-screen-md mx-auto text-center mt-10">
            <h3 className="text-3xl sm:text-4xl leading-normal font-extrabold tracking-tight text-white">
              Frequently Asked <span className="text-gold-500">Questions</span>
            </h3>
            <p>Got any questions? We’ve got answers</p>

          </div>

          <div className="flex flex-row items-center justify-center mt-16">
            <div className="max-w-sm rounded-xl overflow-x-scroll px-3 lg:px-6 .faq-scrollbar border-2 border-white bg-gold-100">
              <ul className="flex flex-row items-center justify-evenly gap-4 px-3 py-1 w-max cursor-pointer ">
                <li className={`${selectedSection === 'first' ? 'text-gold-500 border-b-2' : 'text-black-800'} cursor-pointer p-1 lg:text-xl hover:text-gold-400 border-gold-500 rounded-md font-bold `} onClick={() => setSelectedSection('first')}>FAQ 1</li>
                {/* ADD other Topics here like the above <li> */}
                {/* <li className={`${selectedSection === 'second' ? 'text-gold-500 border-b-2' : 'text-black-800'} cursor-pointer p-1 lg:text-xl hover:text-gold-400 border-gold-500 rounded-md font-bold `} onClick={() => setSelectedSection('second')}>FAQ 2</li> */}
              </ul>
            </div>
          </div>

          <div id="first-QA" className={`${selectedSection === 'first' ? 'block' : 'hidden'} mt-6 mb-16 max-w-screen-md mx-auto`}>
            <div className="flex justify-center py-10">
              <div className="text-2xl font-semibold text-gold-700">Most Common Questions</div>
            </div>
            <ul>
              {faqData.map((item, index) => (
                <li key={index} className="text-left mb-10">
                  <div className="flex flex-row items-start mb-5">
                    <div className="hidden sm:flex items-center justify-center p-3 mr-3 rounded-full bg-white text-gold-500 border-4 border-gold-500 text-xl font-semibold">
                      <Image src={Question} alt="" />
                    </div>
                    <div className="bg-gray-100 p-5 px-10 w-full flex items-center rounded-2xl border-2 border-gold-600">
                      <h4 className="text-md xl:text-lg leading-6 font-medium text-gold-500">{item.question}</h4>
                    </div>
                  </div>

                  <div className="flex flex-row items-start">
                    <div className="bg-gold-100 p-5 px-10 w-full flex items-center rounded-2xl border-2 border-white">
                      <div className="text-black-800 font-medium text-md">{item.answer}</div>
                    </div>
                    <div className="hidden sm:flex items-center justify-center p-3 ml-3 rounded-full bg-gold-500 text-white border-4 border-white text-xl font-semibold">
                      <Image src={Bot} alt="" />
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Add next topic Q/A here like teh above #first-QA */}

        </div>
      </div>
    </section>
  );
}
