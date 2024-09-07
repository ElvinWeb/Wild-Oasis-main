import Link from "next/link";

export default function LoginMessage() {
  return (
    <div className="grid bg-primary-800 ">
      <p className="text-center text-xl py-12 self-center">
        Please first&nbsp;
        <Link href="/login" className="underline text-accent-500">
          login
        </Link>
        &nbsp;and reserve any
        <br /> cabin right now
      </p>
    </div>
  );
}
