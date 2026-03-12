import { BOOKING_URL } from "@/lib/constants";

interface BookingLinkProps {
  children: React.ReactNode;
  className?: string;
}

/** Anchor tag that opens the GHL booking widget in a new tab. Use with asChild on Button. */
const BookingLink = ({ children, className }: BookingLinkProps) => (
  <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" className={className}>
    {children}
  </a>
);

export default BookingLink;
