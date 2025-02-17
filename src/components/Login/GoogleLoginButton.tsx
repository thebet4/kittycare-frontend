import { TokenResponse, useGoogleLogin } from "@react-oauth/google";
import { loginWithGoogleAPI } from "../../services/api";

export default function GoogleLoginButton({
  onSuccess,
}: {
  onSuccess: (email: string) => void;
}) {
  const handleOAuthSuccess = async (code: TokenResponse) => {
    try {
      const response = await loginWithGoogleAPI(code.access_token);
      onSuccess(response.data.email);
    } catch (error) {
      console.log("Login Failed:", error);
    }
  };

  const login = useGoogleLogin({
    onSuccess: (codeResponse) => handleOAuthSuccess(codeResponse),
    onError: (error) => console.log("Login Failed:", error),
  });

  return (
    <button
      onClick={() => login()}
      className="min-w-[55px] h-[55px] bg-white border-2 border-[#898B90] rounded-[20px] flex items-center justify-center mx-auto hover:bg-neutral-100 duration-200"
    >
      <img src="../../../assets/png/google.png" className="w-8 h-8" />
    </button>
  );
}
