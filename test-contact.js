// Test script to verify contact form API
const testContactForm = async () => {
  try {
    console.log('Testing contact form API...\n');

    const testData = {
      name: 'Test User',
      number: '1234567890',
      email: 'test@example.com',
      message: 'This is a test message from the contact form.'
    };

    console.log('Sending test data:', testData);

    const response = await fetch('http://localhost:3000/api/contacts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(testData),
    });

    const result = await response.json();

    console.log('\nResponse status:', response.status);
    console.log('Response data:', result);

    if (response.ok) {
      console.log('\n✅ SUCCESS! Contact form is working correctly.');
      console.log('Data has been saved to your MongoDB database.');
    } else {
      console.log('\n❌ ERROR! Contact form failed.');
      console.log('Error details:', result);
    }
  } catch (error) {
    console.error('\n❌ ERROR! Failed to connect to API:', error.message);
  }
};

testContactForm();
