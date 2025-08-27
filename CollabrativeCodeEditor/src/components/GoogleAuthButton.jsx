import { FcGoogle } from "react-icons/fc";

export default function GoogleAuthButton({ termsAccepted }) {
  const handleGoogleClick = () => {
    if (!termsAccepted) {
      alert("You must agree to the Terms of Service and Privacy Policy.");
      return;
    }
    console.log("Google OAuth flow starting...");
    // 👉 here you'll call your Google login logic (redirect to backend / Firebase / etc.)
  };

  return (
    <>
      {/* Google Auth Button */}
      <button
        type="button"
        onClick={handleGoogleClick}
        className="w-full flex items-center justify-center gap-3 border border-gray-600 rounded-lg px-4 py-2 mb-4 hover:bg-gray-700 transition"
      >
        <FcGoogle size={22} />
        <span className="text-white font-medium">Continue with Google</span>
      </button>

      {/* Divider with OR */}
      <div className="flex items-center my-4">
        <div className="flex-grow h-[1px] bg-gray-600"></div>
        <span className="text-gray-400 px-3 text-sm">OR</span>
        <div className="flex-grow h-[1px] bg-gray-600"></div>
      </div>
    </>
  );
}
