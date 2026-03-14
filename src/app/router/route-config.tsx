import type { ReactNode } from "react";
import { ROUTES } from "@/shared/constants/routes";
import type { AppRouteMeta } from "./route-types";
import { HomePage } from "@/pages/home/page";
import { ManpowerPage } from "@/pages/manpower/page";
import { StudentConsultancyPage } from "@/pages/student-consultancy/page";
import { DocumentsPage } from "@/pages/documents/page";
import { ContactPage } from "@/pages/contact/page";
import { NotFoundPage } from "@/pages/not-found/page";

export type AppRouteConfig = { path: string; element: ReactNode; meta: AppRouteMeta; };
export const appRoutes: AppRouteConfig[] = [
  { path: ROUTES.home, element: <HomePage />, meta: { title: "DYUTI Group", description: "DYUTI Group manpower and student consultancy website." } },
  { path: ROUTES.manpower, element: <ManpowerPage />, meta: { title: "Manpower", description: "Qatar work visa and free visa consultancy." } },
  { path: ROUTES.student, element: <StudentConsultancyPage />, meta: { title: "Student Consultancy", description: "Admissions, tuition waiver, visa support, and coaching." } },
  { path: ROUTES.documents, element: <DocumentsPage />, meta: { title: "Required Documents", description: "Required documents for manpower and student consultancy." } },
  { path: ROUTES.contact, element: <ContactPage />, meta: { title: "Contact", description: "Contact DYUTI Group in Qatar or Bangladesh." } },
  { path: "*", element: <NotFoundPage />, meta: { title: "Not Found", description: "Page not found." } }
];
