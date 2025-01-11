import { verifyEmail } from "@/lib/actions/authActions";
import CardWrapper from "@/ui/CardWrapper";
import ResultMessage from "@/ui/ResultMessage";
import { MdOutlineMailOutline } from "react-icons/md";

export default async function VerifyEmailPage({
  searchParams,
}: {
  searchParams: Promise<{ token: string }>;
}) {
  const { token } = await searchParams;
  const result = await verifyEmail(token);
  return (
    <CardWrapper
      headerText="Verify your email address"
      headerIcon={<MdOutlineMailOutline size={30} />}
      footer={<ResultMessage result={result} />}
    />
  );
}
