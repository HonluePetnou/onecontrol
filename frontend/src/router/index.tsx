import { createBrowserRouter } from "react-router-dom";
import LandingPage from "@/pages/LandingPage";
import MainLayout from "@/layouts/MainLayout";
import AuthLayout from "@/layouts/AuthLayout";
import LoginPage from "@/features/auth/pages/LoginPage";
import RegisterPage from "@/features/auth/pages/RegisterPage";
import ForgotPasswordPage from "@/features/auth/pages/ForgotPasswordPage";
import OTPPage from "@/features/auth/pages/OTPPage";
import DashboardPage from "@/features/dashboard/pages/DashboardPage";
import SimulationPage from "@/features/dashboard/pages/SimulationPage";
import ImportPage from "@/features/dashboard/pages/ImportPage";
import SettingsPage from "@/features/dashboard/pages/SettingsPage";
import MarketAnalysisPage from "@/features/dashboard/pages/MarketAnalysisPage";
import ChatPage from "@/features/dashboard/pages/ChatPage";
import NotFoundPage from "@/pages/NotFoundPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
  },
  {
    path: "/auth",
    element: <AuthLayout />,
    children: [
      {
        path: "login",
        element: <LoginPage />,
      },
      {
        path: "register",
        element: <RegisterPage />,
      },
      {
        path: "forgot-password",
        element: <ForgotPasswordPage />,
      },
      {
        path: "otp",
        element: <OTPPage />,
      },
      {
        path: "*",
        element: <NotFoundPage />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <DashboardPage />,
      },
      {
        path: "simulation",
        element: <SimulationPage />,
      },
      {
        path: "import",
        element: <ImportPage />,
      },
      {
        path: "market",
        element: <MarketAnalysisPage />,
      },
      {
        path: "chat",
        element: <ChatPage />,
      },
      {
        path: "settings",
        element: <SettingsPage />,
      },
      {
        path: "*",
        element: <NotFoundPage />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFoundPage />,
  },
]);
