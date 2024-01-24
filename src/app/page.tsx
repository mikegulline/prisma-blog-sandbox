import { Button, divider } from '@nextui-org/react';
import * as actions from '@/actions/index';
import { auth } from '@/auth';
import Profile from '@/components/profile';

export default async function Home() {
  const session = await auth();
  return (
    <main>
      <div className='flex justify-start gap-2'>
        <form action={actions.signIn}>
          <Button type='submit'>Sign In</Button>
        </form>
        <form action={actions.signOut}>
          <Button type='submit'>Sign Out</Button>
        </form>
      </div>
      <Profile />
    </main>
  );
}
