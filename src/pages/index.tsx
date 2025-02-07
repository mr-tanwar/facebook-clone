import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Home() {
  const isUserLogin = false;
  const router = useRouter();
  useEffect(() => {
    if (!isUserLogin) {
      router.push("/login");
    }
  });

  return (
    <div className="grid">
      <div>
        <h1> Home Page</h1>
      </div>
    </div>
  );
}
