// app/layout.js
import 'bootstrap/dist/css/bootstrap.min.css';
import './globals.css';
import "./styles/dashboard.css";
import 'bootstrap-icons/font/bootstrap-icons.css';


export const metadata = {
  title: 'ADmyBRAND Dashboard',
  description: 'Omnichannel Analytics Dashboard',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
