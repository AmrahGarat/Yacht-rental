import { ReviewStatus } from "@/types";

export type CreateReviewRequestPayload = {
  content: string;
  rentId: string;
  reservationId: string;
};

export type ChangeStatusRequestPayload = {
  id: string;
  status: ReviewStatus.Approved | ReviewStatus.Rejected;
};
