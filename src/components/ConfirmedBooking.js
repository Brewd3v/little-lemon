import moment from "moment";

export default function ConfirmedBooking({ info }) {
  return (
    <div>
      <h2 className="text-cardtitle">Booking confirmed!</h2>
      <p className="text-p">
        We successfully reserved your booking of {info.booking.guests} people
        for {moment(info.booking.date).format("MM/DD/YYYY")}, {info.booking.time}. Reserved under
        the name of {info.account.firstName}. We look forward to seeing you!
      </p>
    </div>
  );
}
