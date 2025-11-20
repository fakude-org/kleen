import './style.css'

document.addEventListener('DOMContentLoaded', () => {
  const orderForm = document.getElementById('orderForm') as HTMLFormElement;

  orderForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const customerName = (document.getElementById('customerName') as HTMLInputElement).value;
    const product = (document.getElementById('product') as HTMLSelectElement).value;
    const quantity = (document.getElementById('quantity') as HTMLInputElement).value;
    const price = (document.getElementById('price') as HTMLInputElement).value;
    const location = (document.getElementById('location') as HTMLInputElement).value;
    const deliveryDate = (document.getElementById('deliveryDate') as HTMLInputElement).value;
    const notes = (document.getElementById('notes') as HTMLTextAreaElement).value;

    if (!customerName || !product || !quantity || !price || !location || !deliveryDate) {
      alert('Please fill in all required fields (Customer Name, Product, Quantity, Price, Location, Delivery Date).');
      return;
    }

    const phoneNumber = '+27738923588'; // Replace with the actual WhatsApp number
    const message = `*New Kleen Product Order*%0A%0A` +
                    `*Customer Name:* ${encodeURIComponent(customerName)}%0A` +
                    `*Product:* ${encodeURIComponent(product)}%0A` +
                    `*Quantity:* ${encodeURIComponent(quantity)}%0A` +
                    `*Price:* ${encodeURIComponent(price)}%0A` +
                    `*Location:* ${encodeURIComponent(location)}%0A` +
                    `*Delivery Date:* ${encodeURIComponent(deliveryDate)}%0A` +
                    (notes ? `*Notes:* ${encodeURIComponent(notes)}%0A` : '');

    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

    window.open(whatsappUrl, '_blank');
  });
});
