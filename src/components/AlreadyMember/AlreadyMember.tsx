import { useAppContext } from "@/contexts/AppContext";
import { Text } from "@mantine/core";

interface AuthLinkIterface {
  switchForm: () => void;
  text: string;
  linkText: string;
}

export default function AlreadyMember({ flag }: { flag?: boolean }) {
  const { switchForm } = useAppContext();

  return (
    <div className="flex justify-end">
      {flag ? (
        <AuthLink
          switchForm={switchForm}
          text="Already a member?"
          linkText="Sign in"
        />
      ) : (
        <AuthLink
          switchForm={switchForm}
          text="Don't have an account yet?"
          linkText="Sign up now"
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
