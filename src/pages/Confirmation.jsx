import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

const Confirmation = () => {
  const [orderItems, setOrderItems] = useState([]);
  const [shippingInfo, setShippingInfo] = useState(null);
  const invoiceRef = useRef();
  const orderId = Math.floor(100000 + Math.random() * 900000);

  useEffect(() => {
    const items = localStorage.getItem('invoice');
    const info = localStorage.getItem('shippingInfo');
    if (items) setOrderItems(JSON.parse(items));
    if (info) setShippingInfo(JSON.parse(info));
  }, []);

  const handlePrint = () => {
    window.print();
    localStorage.removeItem('invoice');
    localStorage.removeItem('shippingInfo');
    localStorage.removeItem('cart');
  };

  const handleDownloadPDF = async () => {
    const element = invoiceRef.current;
    const canvas = await html2canvas(element);
    const imgData = canvas.toDataURL('image/png');
    const pdf = new jsPDF('p', 'mm', 'a4');
    const imgProps = pdf.getImageProperties(imgData);
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
    pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
    pdf.save(`Invoice_${orderId}.pdf`);
  };

  const total = orderItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="min-h-screen bg-white px-4 py-10 flex flex-col items-center text-center">
      <h1 className="text-4xl font-bold text-green-600 mb-6">✅ Order Confirmed!</h1>
      <p className="text-lg text-gray-700 mb-2">Order Number: <strong>#{orderId}</strong></p>

      {shippingInfo && (
        <div className="mb-6 text-gray-700">
          <p><strong>Name:</strong> {shippingInfo.fullName}</p>
          <p><strong>Location:</strong> {shippingInfo.location}</p>
          {shippingInfo.note && <p><strong>Note:</strong> {shippingInfo.note}</p>}
        </div>
      )}

      <div
        ref={invoiceRef}
        className="bg-gray-100 shadow-md p-6 rounded-md w-full max-w-2xl print:bg-white print:shadow-none"
      >
        <h2 className="text-xl font-semibold mb-4">Invoice</h2>
        <table className="w-full text-left border-collapse mb-4">
          <thead>
            <tr className="border-b">
              <th className="py-2">Product</th>
              <th className="py-2">Qty</th>
              <th className="py-2">Price</th>
              <th className="py-2">Total</th>
            </tr>
          </thead>
          <tbody>
            {orderItems.map((item) => (
              <tr key={item.id} className="border-b">
                <td className="py-2">{item.name || item.title}</td>
                <td className="py-2">{item.quantity}</td>
                <td className="py-2">{item.price} MAD</td>
                <td className="py-2">{(item.price * item.quantity).toFixed(2)} MAD</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="flex justify-between font-semibold">
          <span>Total:</span>
          <span>{total.toFixed(2)} MAD</span>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row gap-4 mt-8">
        <button
          onClick={handlePrint}
          className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700"
        >
          🖨️ Print Invoice
        </button>
        <button
          onClick={handleDownloadPDF}
          className="bg-gray-700 text-white px-6 py-3 rounded hover:bg-gray-800"
        >
          📥 Download PDF
        </button>
        <Link
          to="/shop"
          className="bg-green-600 text-white px-6 py-3 rounded hover:bg-green-700"
        >
          Continue Shopping
        </Link>
      </div>
    </div>
  );
};

export default Confirmation;
