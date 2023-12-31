import Navbar from "@/components/Navbar/Navbar";
import "./globals.css";

export const metadata = {
  title: "Tailor Talks",
  description:
    "Tailor Talks is your go-to platform for seamless and intelligent conversations. Explore a new era of communication with Tailor Talks.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Navbar />
        {children}

        {/* Including the chatbot script */}
        <script
          id="bot-script"
          bot_id="b37bcca7-c4dc-4aa9-ba58-c7e36dedc14a"
          org_id="xuper_mall_07112023"
          primary_color=""
          default_message="Hey there, ask questions related to our services."
          bot_name="Tailor Talks"
          bot_height=""
          bot_width=""
          white_label="true" //set to false if wl not needed
          text_color="white"
          src="https://tailortalk.netlify.app/chat-plugin.js"
        ></script>
      </body>
    </html>
  );
}
