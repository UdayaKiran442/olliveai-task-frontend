import { Send } from "lucide-react";

export default function Page() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="flex flex-col items-center gap-4 w-full max-w-md">
        <p className="font-medium text-xl text-center">
          What's on your mind today?
        </p>

        <div className="flex items-center w-full border rounded-xl px-3 py-2">
          <input
            type="text"
            placeholder="Type your message here..."
            className="flex-1 outline-none bg-transparent"
          />

          <button className="ml-2 cursor-pointer">
            <Send size={18} />
          </button>
        </div>
      </div>
    </div>
  );
}