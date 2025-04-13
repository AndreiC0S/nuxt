<template>
  <div class="py-10 px-4 max-w-4xl mx-auto grid gap-10 md:grid-cols-2 items-start">
    <form
      action="https://formspree.io/f/mgvaddvn"
      method="POST"
      class="space-y-4 bg-white p-6 rounded shadow"
    >
      <div>
        <label for="name" class="block text-sm font-medium text-gray-700">Nume</label>
        <input
          type="text"
          name="name"
          id="name"
          required
          class="mt-1 block w-full border border-gray-300 rounded p-2"
        />
      </div>

      <div>
        <label for="email" class="block text-sm font-medium text-gray-700">Email</label>
        <input
          type="email"
          name="email"
          id="email"
          required
          class="mt-1 block w-full border border-gray-300 rounded p-2"
        />
      </div>

      <div>
        <label for="phone" class="block text-sm font-medium text-gray-700">Telefon</label>
        <input
          type="tel"
          name="phone"
          id="phone"
          required
          class="mt-1 block w-full border border-gray-300 rounded p-2"
        />
      </div>

      <div>
        <label for="message" class="block text-sm font-medium text-gray-700">Mesaj</label>
        <textarea
          name="message"
          id="message"
          rows="4"
          required
          class="mt-1 block w-full border border-gray-300 rounded p-2"
        ></textarea>
      </div>

      <input type="text" name="_gotcha" style="display:none" />

      <button
        type="submit"
        class="bg-cyan-600 text-white px-4 py-2 rounded hover:bg-cyan-700"
      >
        Trimite
      </button>
    </form>

    <div class="text-center md:text-left text-gray-800 bg-white p-6 rounded shadow">
      <h3 class="text-lg font-semibold mb-2">📍 Ne găsești aici</h3>
      <p>Bulevardul Laminorului nr. 23</p>
      <p>Sector 1, București</p>
      <div class="mt-4">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2846.3765279016948!2d26.021565112142504!3d44.48695109798805!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40b203eb21389931%3A0x7484bbd06ed2ac5c!2sBulevardul%20Laminorului%2023%2C%20Bucure%C8%99ti%20012955!5e0!3m2!1sen!2sro!4v1744547119775!5m2!1sen!2sro"
          width="100%"
          height="250"
          style="border:0;"
          
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  </div>
</template>