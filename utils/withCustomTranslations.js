// Import necessary modules
import {
  GetServerSideProps,
  serverSideTranslations as nsServerSideTranslations,
} from "next"; // Rename this import
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

// Define a function to enhance pages with translation support
export default function withCustomTranslations(gssp) {
  return async (context) => {
    // Fetch translations based on the provided locale and the "common" namespace
    const translation = await serverSideTranslations(context.locale || "fr", [
      "common",
    ]);

    if (!gssp) {
      // If the original props function is not provided, return only translation props
      return { props: translation };
    }

    // Call the original props function to get its data
    const gsspData = await gssp(context);

    if ("props" in gsspData) {
      // If the original props contain data, merge with translation props
      return { ...gsspData, props: { ...translation, ...gsspData.props } };
    }

    // Return the result of the original props function
    return gsspData;
  };
}
