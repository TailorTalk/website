# Welcome to TailorTalks Website

## 0. Introduction

TailorTalks is a platform for seamless and intelligent conversations. This documentation provides guidance on using the website, its features, and other relevant information.

## 1. Getting Started

### System Requirements

TailorTalks is built with Next.js 14 and utilizes Tailwind CSS. To run TailorTalks locally, ensure that your system meets the following requirements:

- Node.js: Ensure that Node.js is installed on your machine. You can download it from [nodejs.org](https://nodejs.org/).

### How to run the project?

Follow these steps to run TailorTalks locally:

1. Open an empty directory on your machine.

2. Run the following command to clone the TailorTalks repository:
   ```
   git clone https://github.com/TailorTalk/website.git
   cd ./website
   npm install
   npm run dev
   ```
3. Open your web browser and visit http://localhost:3000 to access the locally running TailorTalks website.

## 2. Navigation

### Website Layout

TailorTalks features a user-friendly and intuitive website layout designed for a seamless experience. The layout is crafted to ensure easy navigation and accessibility.

### Navigation Menu

The main navigation menu is structured to provide quick access to key sections of the website. Here's an overview of the main menu sections:

1. **Home:** The landing page of TailorTalks, providing an introduction to the platform and its features.

2. **Demo:** (Under development).

3. **Pricing:** Learn about TailorTalks' pricing plans and subscription options.

4. **Our Stories:** (Under development)

5. **Console:** Access the console for managing and customizing your TailorTalks experience. This section require user authentication.

The navigation menu is designed to help users easily navigate between different sections, making it convenient to explore and utilize the various features offered by TailorTalks.

## 3. Technology Stack

TailorTalks is developed using the following technologies:

- [Next.js 14](https://nextjs.org/): A React framework for building web applications.
- [Tailwind CSS](https://tailwindcss.com/): A utility-first CSS framework.
- [Swiper.js](https://swiperjs.com/): A modern, mobile touch slider.
- [React Icons](https://react-icons.github.io/react-icons/): A library for popular icon sets.
- [Prettier](https://prettier.io/): An opinionated code formatter.

## 4. Tailwind Customizations

The Tailwind configuration for TailorTalks includes customizations to enhance the visual appeal and functionality. Notable modifications:

- Extended color palette: Added `tailorBlue` color to the palette for consistent branding.
- Background images: Defined radial and conic gradient background images.
- Custom font: Integrated the "Comfortaa" font to improve the website's typography.

Developers are encouraged to use the `tailorBlue` color from the extended color palette instead of the default blue color provided by Tailwind for a consistent and branded appearance.

## 5. Troubleshooting

### Common Issues

Here are some common issues you may encounter while working with TailorTalks and how to resolve them:

1. **Installation Errors:**

   - _Problem:_ If you encounter errors during the installation process, make sure you have Node.js installed, and run `npm install` again.
   - _Solution:_ Check your internet connection and try running the installation command with administrator privileges.

2. **Server Not Starting:**

   - _Problem:_ If the development server fails to start, check if another application is using port 3000.
   - _Solution:_ Try stopping any other processes using port 3000, or specify a different port using `npm run dev -- -p <PORT>`.

3. **Compatibility Issues:**
   - _Problem:_ Ensure that your web browser is up to date and supports the features used by TailorTalks.
   - _Solution:_ Update your browser to the latest version or try using a different browser.

### FAQs

#### Q: How can I access the TailorTalks production website?

A: You can access the TailorTalks production website by visiting [tailortalk.in](https://tailortalk.in).

#### Q: Is registration required to use TailorTalks?

A: This is a welcoming website so no login is required for using this website. But for accessing the admin website and to get our service, registration is required. Visit [https://talkui-production.up.railway.app/](https://talkui-production.up.railway.app/) to register and start using TailorTalks.

## Conclusion

Thank you for using TailorTalks! Explore the documentation to make the most out of your experience.

For more information and resources related to TailorTalks, you can refer to the following:

- [TailorTalks GitHub Repository](https://github.com/TailorTalk/website): The official repository for the TailorTalks project.
- [Next.js Documentation](https://nextjs.org/docs): Official documentation for Next.js.
- [Tailwind CSS Documentation](https://tailwindcss.com/docs): Official documentation for Tailwind CSS.
- [Swiper.js Documentation](https://swiperjs.com/get-started): Get started with Swiper.js.
- [React Icons Documentation](https://react-icons.github.io/react-icons/): Explore available icons and usage.
- [Prettier Documentation](https://prettier.io/docs/en/index.html): Learn more about Prettier and its configuration.
