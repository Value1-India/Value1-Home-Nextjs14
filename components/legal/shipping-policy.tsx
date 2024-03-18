export default function Shipping(){
    return(
      <div className="w-full text-md">
        <div className="font-bold mb-6">Shipping Policy</div>
        <div className="mt-4 font-semibold">How does the delivery process work?</div>
        <div className="mt-4">
          <ul className="list-disc list-inside">
            <li className="mt-4">Once our system processes your order, our seller partners check the orders and confirm your orders and your products are inspected thoroughly to ensure they are in perfect condition. </li>
            <li className="mt-4">After they pass through the final round of quality check, they are packed and handed over to our trusted delivery partner. </li>
            <li className="mt-4">Our delivery partners then bring the package to you at the earliest possibility. In case they are unable to reach your provided address or at a suitable time, they will contact you to resolve the issue.</li>
          </ul>
        </div>
        <div className="mt-4 font-semibold">How are items packaged? </div>
        <div className="mt-4">Our partners package your products in boxes, which are covered in a plastic layer. Each individual product is packaged in bubble wrap while fragile items like bottles are safely secured with additional bubble wrap.</div>
        <div className="mt-4 font-semibold">What is the range of locations to which Value1 ships their products? </div>
        <div className="mt-4">Value1 ships throughout India! </div>
        <div className="mt-4 font-semibold">My order has been shipped. Now how can I track it?</div>
        <div className="mt-4">After placing your order, you will receive a confirmation message on your registered email and phone number. As we prepare and ship your order within 24 hours of the confirmation, you can then check the status of your package through the ‘Track’ button on the ‘My Orders’ section. You can also choose to receive your order updates on WhatsApp. </div>
        <div className="mt-4 font-semibold">What is the estimated delivery time? </div>
        <div>
          <div className="mt-4">We usually dispatch most orders within 1-4 business days (excluding Sundays and public holidays) </div>
          <ul className="list-disc list-inside">
            <li className="mt-4">Though, our partners keep 95% of their catalogue in their inventory, certain products need to be sourced directly from the brand itself so that we can live up to our promise of providing fresh, non-expired products. </li>
            <li className="mt-4">While we are trying our best to avoid this situation, these products might delay your order. </li>
            <li className="mt-4">If you are ordering our products from a Mega Sale event, dispatches may be a bit delayed due to increased volumes. We will target to dispatch all orders within 5 days of order date. </li>
          </ul>
        </div>
        <div className="mt-4 font-semibold">My order will be shipped in multiple shipments? What does this mean? </div>
        <div className="mt-4">Don’t worry! This is a completely normal situation. This just means that different parts of your order may have simply been shipped from our different partner locations. Rest assured, you will only have to pay the shipping/CoD charge if applicable, on the first package you receive. </div>
        <div className="mt-4 font-semibold">Are there any shipping charges applicable on my order? </div>
        <div>
          <ul className="list-disc list-inside">
            <li className="mt-4">We have partnered with various shipping partners and the pricing is based on delivery speed and the order value.  </li>
            <li className="mt-4">You can choose the various shipping options based on the products and location while completing the order. </li>
            <li className="mt-4">Most of the domestic shipments will have a flat standard fee for all the orders below Rs.499 and most of the partners will deliver free for all the orders above Rs.499 as a standard delivery option. </li>
            <li className="mt-4">We are currently not accepting Cash On Delivery orders below Rs.499 or above Rs.5,000.</li>
          </ul>
        </div>
        <div className="mt-4 font-semibold">Does Value1 ship outside India? </div>
        <div className="mt-4">No, at present we are not shipping to any international locations.</div>
      </div>
    );
}