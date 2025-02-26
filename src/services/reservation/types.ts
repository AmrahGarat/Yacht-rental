import { Reservation, ReservationStatus } from "@/types";

export type CreateReservationRequestPayload = {
  billingPhoneNumber: string;
  billingAddress: string;
  billingCity: string;
  billingName: string;
  startDate: string;
  endDate: string;
  location: string;
  rentId: string;
};

export type CreateReservationResponseType = {
  item?: Reservation;
  message: string;
};

export type ChangeStatusRequestPayload = {
  id: string;
  status: ReservationStatus.Approved | ReservationStatus.Rejected;
};
