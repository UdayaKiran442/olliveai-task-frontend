import { auth } from '@clerk/nextjs/server'
import SignIn from '../components/SignIn';
import { redirect } from 'next/navigation';

export default async function Home() {
  const { isAuthenticated } = await auth()
  if (isAuthenticated) {
    redirect('/chat') // Redirect to the chat page if the user is authenticated
  }
  return (
    <div>
      <SignIn />
    </div>
  );
}
