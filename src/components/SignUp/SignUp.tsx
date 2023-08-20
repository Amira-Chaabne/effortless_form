import { Text } from "@mantine/core";
import AlreadyMember from "../AlreadyMember/AlreadyMember";
import SignUpForm from "../SignUpForm/SignUpForm";
import Appreciation from "../Appreciation";
import { useAppContext } from "@/contexts/AppContext";
import { useTranslation } from "next-i18next";

export default function SignUp() {
  const { t } = useTranslation();
  const { formSubmitted } = useAppContext();

  return (
    <>
      {formSubmitted ? (
        <Appreciation signIn={false} />
      ) : (
        <>
          <AlreadyMember flag={true} />
          <div className="w-full md:max-w-2xl mx-auto">
            <Text className="text-3xl font-bold my-12">
              {t("create_account")}
            </Text>
            <SignUpForm />
          </div>
        </>
      )}
    </>
  );
}
