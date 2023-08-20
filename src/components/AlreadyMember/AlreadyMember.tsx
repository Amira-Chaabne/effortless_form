import AppContext, { useAppContext } from "@/contexts/AppContext";
import { Text } from "@mantine/core";
import { useContext } from "react";
import { useTranslation } from "next-i18next";

interface AuthLinkIterface {
  switchForm: () => void;
  text: string;
  linkText: string;
}

export default function AlreadyMember({ flag }: { flag?: boolean }) {
  const { t } = useTranslation();
  const { switchForm } = useAppContext();

  return (
    <div className="flex justify-end">
      {flag ? (
        <AuthLink
          switchForm={switchForm}
          text={t("already_member")}
          linkText={t("sign_in")}
        />
      ) : (
        <AuthLink
          switchForm={switchForm}
          text={t("dont_have_account")}
          linkText={t("sign_up")}
        />
      )}
    </div>
  );
}

function AuthLink({ switchForm, text, linkText }: AuthLinkIterface) {
  return (
    <Text size="xs" className="cursor-pointer">
      <span>{text}</span>{" "}
      <a
        onClick={switchForm}
        className="font-medium text-teal-600 hover:text-teal-500 transition-colors"
      >
        {linkText}
      </a>
    </Text>
  );
}
