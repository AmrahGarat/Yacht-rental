import { createBrowserRouter } from "react-router-dom";
import { paths } from "@/constants/paths";
import HomePage from "@/pages/(business)/home";
import RootLayout from "@/components/shared/RootLayout";
import { RentListPage } from "@/pages/(business)/list";
import RentDetailPage from "@/pages/(business)/detail";
import PaymentPage from "@/pages/(business)/payment";
import DashboardMainPage from "@/pages/(dashboard)/main";
import DashboardRentListPage from "@/pages/(dashboard)/rent/list";
import DashboardRentCreatePage from "@/pages/(dashboard)/rent/create";
import DashboardRentEditPage from "@/pages/(dashboard)/rent/edit";
import DashboardLayout from "@/components/shared/DashboardLayout";
import AuthLayout from "@/components/shared/AuthLayout";
import ReservationsPage from "@/pages/(business)/reservations";
import DashboardReservationListPage from "@/pages/(dashboard)/reservation";
import DashboardReviewListPage from "@/pages/(dashboard)/review";
import ChatPage from "@/pages/(dashboard)/chat";
import FAQPage from "@/pages/(business)/faq";
import { Suspense, lazy } from "react";
import CannesFilmFestivalEvent from "@/pages/(business)/events/components/corporateevents/eventpage/CannesFilmFestivalEvent";
import CannesLionsEvent from "@/pages/(business)/events/components/corporateevents/eventpage/CannesLionsEvent";
import MipcomEvent from "@/pages/(business)/events/components/corporateevents/eventpage/MipcomEvent";
import AbuDhabiGrandPrixEvent from "@/pages/(business)/events/components/sportevents/eventpage/AbuDhabiGrandPrixEvent";
import ErrorPage from "@/components/shared/ErrorPage";
import MonacoEPrixEvent from "@/pages/(business)/events/components/sportevents/eventpage/MonacoEPrixEvent";
import { LikesPage } from "@/pages/(business)/likes";
import AdminProfile from "@/pages/(dashboard)/profile";

const EventsPage = lazy(() => import("@/pages/(business)/events/index"));
const ArtBaselMiamiEvent = lazy(
  () =>
    import(
      "@/pages/(business)/events/components/corporateevents/eventpage/ArtBaselMiamiEvent"
    )
);

const adminData = {
  name: "Amrah Garayev",
  email: "mr.amrahgarayev@gmail.com",
  role: "Admin",
};

export const router = createBrowserRouter([
  {
    path: "",
    element: <RootLayout />,
    children: [
      {
        path: paths.HOME,
        element: <HomePage />,
      },
      {
        path: paths.LIST,
        element: <RentListPage />,
      },
      {
        path: paths.DETAIL(),
        element: <RentDetailPage />,
      },
      {
        path: paths.QUESTIONS,
        element: <FAQPage />,
      },
      {
        path: paths.LIKES,
        element: <LikesPage />,
      },
      {
        path: paths.ADMINPROFILE,
        element: <AdminProfile {...adminData} />,
      },
      {
        path: paths.EVENTS.MAIN,
        element: (
          <Suspense
            fallback={
              <div className="flex justify-center items-center h-screen">
                <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500"></div>
              </div>
            }
          >
            <EventsPage />
          </Suspense>
        ),
      },
      {
        path: paths.EVENTS.ARTBASEL,
        element: (
          <Suspense
            fallback={
              <div className="flex justify-center items-center h-screen">
                <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500"></div>
              </div>
            }
          >
            <ArtBaselMiamiEvent />
          </Suspense>
        ),
      },
      {
        path: paths.EVENTS.CANNESF,
        element: (
          <Suspense
            fallback={
              <div className="flex justify-center items-center h-screen">
                <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500"></div>
              </div>
            }
          >
            <CannesFilmFestivalEvent />
          </Suspense>
        ),
      },
      {
        path: paths.EVENTS.CANNESL,
        element: (
          <Suspense
            fallback={
              <div className="flex justify-center items-center h-screen">
                <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500"></div>
              </div>
            }
          >
            <CannesLionsEvent />
          </Suspense>
        ),
      },
      {
        path: paths.EVENTS.MIPCOM,
        element: (
          <Suspense
            fallback={
              <div className="flex justify-center items-center h-screen">
                <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500"></div>
              </div>
            }
          >
            <MipcomEvent />
          </Suspense>
        ),
      },
      {
        path: paths.EVENTS.ABUDHABI,
        element: (
          <Suspense
            fallback={
              <div className="flex justify-center items-center h-screen">
                <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500"></div>
              </div>
            }
          >
            <AbuDhabiGrandPrixEvent />
          </Suspense>
        ),
      },
      {
        path: paths.EVENTS.MONACOE,
        element: (
          <Suspense
            fallback={
              <div className="flex justify-center items-center h-screen">
                <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500"></div>
              </div>
            }
          >
            <MonacoEPrixEvent />
          </Suspense>
        ),
      },
      {
        path: "",
        element: <AuthLayout />,
        children: [
          {
            path: paths.PAYMENT(),
            element: <PaymentPage />,
          },
          {
            path: paths.RESERVATIONS,
            element: <ReservationsPage />,
          },
        ],
      },
      {
        path: "",
        element: <DashboardLayout />,
        children: [
          {
            path: paths.DASHBOARD.MAIN,
            element: <DashboardMainPage />,
          },
          {
            path: paths.DASHBOARD.RENTS.LIST,
            element: <DashboardRentListPage />,
          },
          {
            path: paths.DASHBOARD.RENTS.CREATE,
            element: <DashboardRentCreatePage />,
          },
          {
            path: paths.DASHBOARD.RENTS.EDIT(),
            element: <DashboardRentEditPage />,
          },
          {
            path: paths.DASHBOARD.RESERVATIONS.LIST,
            element: <DashboardReservationListPage />,
          },
          {
            path: paths.DASHBOARD.REVIEWS.LIST,
            element: <DashboardReviewListPage />,
          },
          {
            path: paths.DASHBOARD.CHAT.VIEW,
            element: <ChatPage />,
          },
          {
            path: paths.DASHBOARD.CHAT.USER(),
            element: <ChatPage />,
          },
        ],
      },
      {
        path: "*",
        element: <ErrorPage />,
      },
    ],
  },
]);
