import "./globals.css";

export const metadata = {
  title: "Harshit Kumar Patel | Associate Product Manager",
  description:
    "A polished one-page product portfolio for Harshit Kumar Patel, showcasing case studies, product thinking, experience, and recruiter-friendly PM storytelling."
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-canvas text-ink antialiased">{children}</body>
    </html>
  );
}
